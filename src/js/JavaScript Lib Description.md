# JavaScript Lib Description

## 概述
基于seajs, cmd, arale, spm等技术和工具进行js库的构建

## 主要组成部分
采用商城模式（相对于[大教堂与集市](http://lifesinger.wordpress.com/2011/04/05/seajs-080-released/)模式）

主要有以下几个部分组成：

1. Core 核心
1. Utilities 工具
1. Widgets  UI组件

库中主要组件来源：

1. cute自身开发 `cute`
1. arale js `arale`
1. jquery and jquery plugins `jquery`
1. gallery 业界精选 `gallery`

### Core

#### Class `arale`
提供简洁的 OO 实现

* 来源：arale/class/1.1.0
* 依赖：none
* git：`https://github.com/aralejs/class`

#### Events `arale`
提供基本的事件添加、移除和触发功能

* 来源：arale/events/1.1.0
* 依赖：none
* git：`https://github.com/aralejs/events`

#### Base `arale`
Base 是一个基础类，提供 Class、Events、Attribute 和 Aspect 支持

* 来源：arale/base/1.1.1
* 依赖：Class, Events
* git：`https://github.com/aralejs/base`

#### widget `arale`
Widget 是 UI 组件的基础类，约定了组件的基本生命周期，实现了一些通用功能

* 来源：arale/widget/1.1.1
* 依赖：Base, jquery
* git：`https://github.com/aralejs/widget`


### Utilities

#### jquery `jquery`
write less, do more.

来源：http://jquery.com/
版本：1.9.1

### util `cute`
cute js util

来源：cute/util

#### cookie `arale`
提供 Cookie 操作方法

* 来源：arale/cookie/1.0.2
* 依赖：none
* git：`https://github.com/aralejs/cookie`

#### detector `arale`
客户端信息识别模块，用于自动识别用户使用的客户端环境

* 来源：arale/detector/1.2.1
* 依赖：none
* git：`https://github.com/aralejs/detector`

#### easing `arale
Easing 是动画的平滑函数扩展包。由于 jQuery 自带的比较少，通过这个包可以增加更多平滑函数

提供模块化和jquery plugin 两种方法使用。

* 来源：arale/easing/1.0.0
* 依赖：jquery
* git：`https://github.com/aralejs/easing`

#### messenger `arale`
跨域 Iframe 通信解决方案

* 来源：arale/messenger/1.0.2
* 依赖：jquery
* git：`https://github.com/aralejs/messenger`

#### placeholder `arale`
针对不支持 Html5 placeholder 的占位符兼容解决方案

* 来源：arale/placeholder/1.1.0
* 依赖：jquery
* git：`https://github.com/aralejs/placeholder`

#### position `arale`
简单实用的定位工具，将一个 DOM 节点相对于另一个 DOM 节点进行定位操作

* 来源：arale/position/1.0.1
* 依赖：jquery
* git：`https://github.com/aralejs/position`

#### upload `arale`
iframe and html5 uploader

* 来源：arale/upload/1.0.0
* 依赖：jquery
* git：`https://github.com/aralejs/upload`

#### json `gallery`
JSON in JavaScript

* 来源：gallery/json/1.0.3
* 依赖：none
* git：https://github.com/douglascrockford/JSON-js

### Widgets

