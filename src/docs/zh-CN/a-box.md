<demo-component-author author="孙锋锋"></demo-component-author>

## 弹性布局

:::demo
```html
<a-box class="a-box-demo" justify-content="flex-start">
  <a-box class="a-box-demo-item">左对齐</a-box>
  <a-box class="a-box-demo-item">左对齐</a-box>
</a-box>

<a-box class="a-box-demo" justify-content="space-between">
  <a-box class="a-box-demo-item">两端对齐</a-box>
  <a-box class="a-box-demo-item">两端对齐</a-box>
</a-box>

<a-box class="a-box-demo" justify-content="flex-end">
  <a-box class="a-box-demo-item">右对齐</a-box>
  <a-box class="a-box-demo-item">右对齐</a-box>
</a-box>

<a-box class="a-box-demo" justify-content="center">
  <a-box class="a-box-demo-item">居中对齐</a-box>
  <a-box class="a-box-demo-item">居中对齐</a-box>
</a-box>

<a-box class="a-box-demo" justify-content="space-around">
  <a-box class="a-box-demo-item">等分对齐</a-box>
  <a-box class="a-box-demo-item">等分对齐</a-box>
</a-box>

<a-box class="a-box-demo" justify-content="space-around">
  <a-box class="a-box-demo-item" order="2">排序-2</a-box>
  <a-box class="a-box-demo-item" order="4">排序-4</a-box>
  <a-box class="a-box-demo-item" order="1">排序-1</a-box>
  <a-box class="a-box-demo-item" order="3">排序-3</a-box>
</a-box>

<style scope>
.a-box-demo {
  width: 100%;
  margin: .5rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  box-sizing: border-box;
}
.a-box-demo-item {
  background: #41b3a3;
  padding: .5rem 1rem;
  margin: 0 .2rem;
  border-radius: 4px;
  color: #fff;
}
</style>


```
:::


