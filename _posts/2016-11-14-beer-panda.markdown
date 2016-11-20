---
layout: post
title: "BeerPanda"
type: HARDWARE
members: [张清波]
image: [2_23_Screen Shot 2016-11-02 at 13.03.38.png,2_23_Screen Shot 2016-11-02 at 13.03.32.png,2_23_Screen Shot 2016-11-02 at 13.03.26.png]
description: 一个简易的物联网出酒系统，该系统利用8266芯片通过MQTT协议来智能控制电磁阀搭配流量计来达到自动计量出酒目的
---
<h2>作品描述：</h2>

我们通过微信支付平台作为支付载体，设计制作一个简易的物联网出酒系统，该系统利用8266芯片通过MQTT协议来智能控制电磁阀搭配流量计来达到自动计量出酒目的。
在用户通过支付二维码/移动应用付款成功后，通过MQTT协议向智能芯片发送一个消息，该芯片收到消息后打开电磁阀，
并实时读取液体流量计的数据，当流量达到设定时关闭电磁阀。
该啤酒自动贩卖系统利用智能芯片实现了啤酒贩卖过程的自动化，整个贩卖过程不需要人工干预。

[作品主页][MainPage] [代码链接][CodeBase]

[CodeBase]: https://git.thoughtworks.net/tech-contest/BeerPanda
[MainPage]: http://homebrewer.strikingly.com/
