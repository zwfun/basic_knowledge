# Https

- http1.0每个资源都要建立一次请求, 严重影响客户机和服务器的性能
- http1.1 支持持久连接、限制请求连接数超过会阻塞
- http2.0 同一域名下请求数量没有限制。
  

#### http2.0
- http2.0 在应用层下多加了一层分帧层 只建立一个请求，通过多路复用 所有资源分为更小的帧，进行请求。通过不同的首部进行判断不同的资源
- 首部压缩，所有
- 请求优先级， 防止大的请求阻塞了其他的请求
- 服务器推送， 服务器可以根据用户请求的html,判断并返回用户需要的图片等资源

####  带来的影响

- 雪碧图  base64内嵌图片可以不需要了
- cdn加速也可以不需要可
  
#### 参考连接
- http://www.alloyteam.com/2015/03/http2-0-di-qi-miao-ri-chang/