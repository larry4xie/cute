# Specification

## CSS
### 注释
### 组件命名

cute中所有组件名称均使用使用`小写字母`加`-`组成

#### 组件
尽量使用一个不长的单词命名，可以使用缩写

如：`list`, `notify`, `btn` ...

#### 组件状态
组件名 + 组件状态名

如：`notify-nob`, `btn-primary`, `btn-error` ...

#### 组件模块
组件名 + 组件模块

如：`list-item`, `notify-title` ...

#### 组件模块状态 
__这种方案虽然名称较长，但是要表达的信息最清晰，同时可以避开ie6不能使用连着的class选择器__

组件名 + 组件模块 + 模块状态名
如： `list-item-odd`, `list-item-hover`, `list-item-active`

#### 其他和组件及模块没有明显关联的状态
状态名

如：table的`hover` ...

#### 常见扩展
`primary`, `inverse`, `success`,`info`, `warn`, `error` ...

#### 常见状态
`odd`, `hover`, `active`, `selected`, `disabled` ...

#### 常见命名、命名缩写
	> divider: 分割
	> title, content
	> head, body, foot

	> curr: current
	> nob: noborder

#### 参考资料:
1. http://ued.taobao.com/blog/2009/11/classname-long-vs-short/

## HTML
## JavaScript