import DialogWindow from './DialogWindow';
import Vue from "vue";
import Utils from "../../utils";

const createDialogWindow = function (content, options) {
  let DialogWindowCtor = Vue.component(DialogWindow.name, DialogWindow);
  let dialogWindow = new DialogWindowCtor();
  dialogWindow.$props.content = content;

  if (!Utils.isObjectNotNull(options)) {
    options = {};
  }

  let container;
  if (Utils.isString(options.containerId)) {
    container = document.getElementById(options.containerId);
  }

  container = container || document.body;
  dialogWindow.$contianer = container;

  let closeContentModalRestPart = (options.closeContentModalRestPart === true ? true : false);
  dialogWindow.$props.closeContentModalRestPart = closeContentModalRestPart;

  dialogWindow.$mount();
  container.appendChild(dialogWindow.$el);

  dialogWindow.$data.dialogBoxContentArgs = options.dialogBoxContentArgs;
  dialogWindow.$data.visible = true;
  dialogWindow.$data.isRealClose = false;

  return dialogWindow;
};

// 保存可用的非等待对话框
const availableDialogWindows = {};

const Dialog = {
  reuseMode: {
    get reuse() {
      return 'ReUse';
    },
    get none() {
      return 'None';
    }
  },
  /**
   * 创建对话框并返回一个dialogWindow实例
   * 
   * @param {Object} dialogContent
   * @param {Object} options
   * @returns dialogWindow实例
   */
  showNonAwait(dialogContent, options) {
    if (!Utils.isObjectNotNull(options)) {
      options = {};
    }

    let reuse = options.reuseMode;
    if (reuse === this.reuseMode.none && !dialogContent) {
      throw new Error('[Dialog]dialogContent为空');
    }

    let dialogWindow;
    let availableDialogWindowsCount = Object.keys(availableDialogWindows).length;
    if (reuse === this.reuseMode.none || availableDialogWindowsCount < 1) {
      if (!dialogContent) {
        throw new Error('[Dialog]dialogContent为空');
      }
      dialogWindow = createDialogWindow(dialogContent, options);
      dialogWindow.$on('doRealClose', () => {
        dialogWindow.$data.isRealClose = true;
        Dialog.close(dialogWindow);
      });
      dialogWindow.$on('close', () => {
        Dialog.close(dialogWindow);
      });

      const uuid = Utils.uuidv4();
      dialogWindow.$uuid = uuid;
      availableDialogWindows[uuid] = dialogWindow;
      return dialogWindow;
    }

    if (reuse !== this.reuseMode.none && availableDialogWindowsCount > 1) {
      throw new Error('[Dialog]对话框窗口多于一个');
    }

    dialogWindow = availableDialogWindows[Object.keys(availableDialogWindows)[0]];

    if (dialogContent) {
      dialogWindow.$props.content = dialogContent;
    }

    dialogWindow.$data.dialogBoxContentArgs = options.dialogBoxContentArgs;
    dialogWindow.$props.closeContentModalRestPart = !!options.closeContentModalRestPart;
    return dialogWindow;
  },
  /**
   * 创建对话框并返回一个promise
   * 
   * @param {Object} dialogContent
   * @param {Object} options
   * @returns promise
   */
  showAwait(dialogContent, options) {
    let dialogWindow = createDialogWindow(dialogContent, options);
    return new Promise((resolve) => {
      dialogWindow.$on('doRealClose', (result) => {
        dialogWindow.$data.isRealClose = true;
        Dialog.close(dialogWindow);
        resolve(result);
      });
      dialogWindow.$on('close', () => {
        Dialog.close(dialogWindow);
      });
    });
  },
  /**
   * 获取一个可用对话框
   * @param {String} identifier 
   */
  getAvailableDialog(identifier) {
    if (!identifier) {
      throw new Error('[Dialog]getAvailableDialog:对话框标识符为空');
    }

    if (!Utils.isString(identifier)) {
      throw new Error('[Dialog]getAvailableDialog:对话框标识符不是字符串');
    }

    return availableDialogWindows[identifier];
  },
  /**
   * 关闭对话框
   * 
   * @param {Object|String} identifier
   */
  close(identifier) {
    if (!identifier) {
      throw new Error('[Dialog]close:对话框标识符为空');
    }

    let dialogWindow;
    if (Utils.isString(identifier)) {
      dialogWindow = availableDialogWindows[identifier];
    } else {
      dialogWindow = identifier.$parent || identifier;
    }

    if (!dialogWindow) {
      return;
    }

    if (dialogWindow.$data.isRealClose) {
      dialogWindow.$destroy();
      dialogWindow.$contianer.removeChild(dialogWindow.$el);
    } else {
      const uuid = dialogWindow.$uuid;
      if (uuid) {
        delete availableDialogWindows[uuid];
      }

      dialogWindow.onClose();
      dialogWindow.$data.visible = false;
    }
  }
};

export default Dialog;