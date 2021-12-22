---
title: Button
lang: en-US
---

# Button

Commonly used button.

## Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

button/basic

:::

## Button Attributes

| Attribute         | Description                                                 | Type               | Accepted Values                                    | Default |
| ----------------- | ----------------------------------------------------------- | ------------------ | -------------------------------------------------- | ------- |
| size              | button size                                                 | string             | medium / small / mini                              | —       |
| type              | button type                                                 | string             | primary / success / warning / danger / info / text | —       |
| plain             | determine whether it's a plain button                       | boolean            | —                                                  | false   |
| round             | determine whether it's a round button                       | boolean            | —                                                  | false   |
| circle            | determine whether it's a circle button                      | boolean            | —                                                  | false   |
| loading           | determine whether it's loading                              | boolean            | —                                                  | false   |
| disabled          | disable the button                                          | boolean            | —                                                  | false   |
| icon              | icon component                                              | string / Component | —                                                  | —       |
| autofocus         | same as native button's `autofocus`                         | boolean            | —                                                  | false   |
| native-type       | same as native button's `type`                              | string             | button / submit / reset                            | button  |
| auto-insert-space | automatically insert a space between two chinese characters | boolean            |                                                    | —       |

## Button Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |

## Button-Group Attributes

| Attribute | Description                                      | Type   | Accepted Values             | Default |
| --------- | ------------------------------------------------ | ------ | --------------------------- | ------- |
| size      | control the size of buttons in this button-group | string | medium / small / mini       | —       |
| type      | control the type of buttons in this button-group | string | primary / success / warning | —       |

## Button-Group Slots

| Name | Description                    | Subtags |
| ---- | ------------------------------ | ------- |
| -    | customize button group content | Button  |

<style lang="scss">
.example-showcase {
  .el-row {
    margin-bottom: 20px;
    align-items: baseline;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-button + .el-button {
    margin-left: 10px;
  }
  .el-button-group {
    .el-button + .el-button {
      margin-left: 0;
    }

    & + .el-button-group {
      margin-left: 10px;
    }
  }
}

</style>
