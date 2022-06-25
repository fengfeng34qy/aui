<demo-component-author author="孙锋锋"></demo-component-author>
### 基础布局

使用单一分栏创建基础的栅格布局。

:::demo 通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
```html
<a-row>
  <a-col :span="24"><div class="a-row-demo"></div></a-col>
</a-row>
<a-row>
  <a-col :span="12"><div class="a-row-demo"></div></a-col>
  <a-col :span="12"><div class="a-row-demo"></div></a-col>
</a-row>
<a-row>
  <a-col :span="8"><div class="a-row-demo"></div></a-col>
  <a-col :span="8"><div class="a-row-demo"></div></a-col>
  <a-col :span="8"><div class="a-row-demo"></div></a-col>
</a-row>
<a-row>
  <a-col :span="6"><div class="a-row-demo"></div></a-col>
  <a-col :span="6"><div class="a-row-demo"></div></a-col>
  <a-col :span="6"><div class="a-row-demo"></div></a-col>
  <a-col :span="6"><div class="a-row-demo"></div></a-col>
</a-row>
<a-row>
  <a-col :span="4"><div class="a-row-demo"></div></a-col>
  <a-col :span="4"><div class="a-row-demo"></div></a-col>
  <a-col :span="4"><div class="a-row-demo"></div></a-col>
  <a-col :span="4"><div class="a-row-demo"></div></a-col>
  <a-col :span="4"><div class="a-row-demo"></div></a-col>
  <a-col :span="4"><div class="a-row-demo"></div></a-col>
</a-row>

<style>
.a-row-demo {
  height: 36px;
  background: #4182c5;
  border-radius: 4px;
  margin: 4px;
  box-sizing: border-box;
}
</style>



```
:::
