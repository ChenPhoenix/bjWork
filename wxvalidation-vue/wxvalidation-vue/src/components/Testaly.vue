<template>
    <div class="testaly">
      <div id="captcha" style="display: none!important;"></div>
      <header>防伪查询</header>
      <section class="auth-search">
        <div class="auth-select" id="sel-down">
          <span class="auth-select-title cheVal" id="cheVal-down" data-val="0">选择车型</span>
          <!--<span class="cheVal" id="cheVal-down" data-val="0"></span>-->
          <img class="auth-icon-down" src="../../static/img/auth-icon-down.png" alt="">
        </div>
        <div class="search-xlh">
          <p class="xlh">查询序列号</p>
          <div class="search-box">
            <div class="search-input-box">
              <input type="text" placeholder="请输入序列号" id="serNum">
              <div class="ser-btn" id="serBtn" @click="btnHandel">查询</div>
            </div>
            <div class="danger-notice">
            </div>
          </div>
        </div>
        <div class="auth-search-list" id="sel-up">
          <div class="list-select">
            <span class="list-select-title" id="cheVal-up">选择车型</span>
            <!--<span class="cheVal" id="cheVal-up" data-val="0"></span>-->
            <img class="list-icon-down" src="../../static/img/auth-icon-down.png" alt="">
          </div>
          <ul class="list-detail">
            <li class="list-detail-li" id="mini">
              九号平衡车
            </li>
            <li class="list-detail-li" id="mk2">
              九号单轮A1
            </li>
            <li class="list-detail-li" id="plus">
              九号平衡车Plus
            </li>
            <li class="list-detail-li" id="xfx">
              赛格威平衡轮W1
            </li>
            <li class="list-detail-li" id="gokart">
              九号平衡车 卡丁配件
            </li>
          </ul>

        </div>
      </section>
      <section class="ser-result">
        <div class="res-font">
          <p class="res-title">编码有效，请放心使用</p>
          <p class="res-detail">首次查询时间：<span  id="start">2018-12-17</span></p>
          <p class="res-detail" >最近查询时间：<span id="end">2018-12-17</span></p>
          <p class="res-detail" >总计查询次数：<span id="countall">1</span></p>
        </div>
        <div class="res-fail">
          <p class="res-title">编码无效，请核对编码</p>
        </div>
        <div class="res-img">
          <img src="" alt="">
        </div>
      </section>
      <section class="auth-notice">
        <div class="notice-title">
          防伪结果查询提示
        </div>
        <div class="notice-detail">
          <p>
            1、刮开防伪标签涂层,获得一组防伪编码<br>
            2、从左至右,依次输入防伪标签上的防伪编码<br>
            3、点击[查询]按钮,验证所要查询防伪编码真伪<br>
            4、防伪查询结果说明<br>
            结果一：编码有效,请放心使用。<br>
            结果二：防伪码无效或车型选择有误。<br>
            结果三：多次查询,请谨防假冒产品或二手产品<br>
          </p>
        </div>
      </section>
      <div id="ser-load">
        <div id="ser-load-box" >
          正在查询，请稍后...
        </div>
      </div>
      <div id="dangerous">
        <div id="dangerous-box">
          您的网络环境存在风险<br>不能查询
        </div>
      </div>
      <input type="hidden" id="whyz">
    </div>
</template>

<script>
    export default {
        name: "Testaly",
        mounted(){
          this.init();
        },
        methods:{
          init() {
            window.NVC_Opt = {
              //无痕配置 && 滑动验证、刮刮卡通用配置
              appkey:'FFFF0N0000000000750B',
              scene:'nvc_other_h5',
              isH5:true,
              popUp:false,
              renderTo:'#captcha',
              nvcCallback:function(data){
                // data为getNVCVal()的值，此函数为二次验证滑动或者刮刮卡通过后的回调函数
                // data跟业务请求一起上传，由后端请求AnalyzeNvc接口，接口会返回100或者900
              },
              trans: {"key1": "code0","nvcCode":400},
              language: "cn",
              //滑动验证长度配置
              customWidth: 300,
              //刮刮卡配置项
              width: 300,
              height: 100,
              elements: [
                '//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png',
                '//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png'
              ],
              bg_back_prepared: '//img.alicdn.com/tps/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png',
              bg_front: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefk5w+ruswAAAAfSURBVFjD7cExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAFPlUGoAAAAAElFTkSuQmCC',
              obj_ok: '//img.alicdn.com/tfs/TB1rmyTltfJ8KJjy0FeXXXKEXXa-50-74.png',
              bg_back_pass: '//img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png',
              obj_error: '//img.alicdn.com/tfs/TB1q9yTltfJ8KJjy0FeXXXKEXXa-50-74.png',
              bg_back_fail: '//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png',
              upLang:{"cn":{
                  _ggk_guide: "请在屏幕上滑动，刮出两面盾牌",
                  _ggk_success: "恭喜您成功刮出盾牌<br/>继续下一步操作吧",
                  _ggk_loading: "加载中",
                  _ggk_fail: ['呀，盾牌不见了<br/>请', "javascript:NoCaptcha.reset()", '再来一次', '或', "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", '反馈问题'],
                  _ggk_action_timeout: ['我等得太久啦<br/>请', "javascript:NoCaptcha.reset()", '再来一次', '或', "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", '反馈问题'],
                  _ggk_net_err: ['网络实在不给力<br/>请', "javascript:NoCaptcha.reset()", '再来一次', '或', "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", '反馈问题'],
                  _ggk_too_fast: ['您刮得太快啦<br/>请', "javascript:NoCaptcha.reset()", '再来一次', '或', "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", '反馈问题']
                }
              }
            }




            // $(function () {
              //点击下箭头展开选择列表
              $('#sel-down').click(function () {
                $("#sel-up").toggle();
                $('.danger-notice').hide();//红色提示消失
              })
              //点击上箭头关闭选择列表
              $("#sel-up").on('click','.list-detail-li',function (e) {
                e.preventDefault();
                $('.list-detail-li').css('color','#333');
                $(this).css('color','#1981d8');
                let cheId=$(this).attr('id');
                let cheValue=$(this).html();
                $('.cheVal').html(cheValue);
                $('.cheVal').attr('data-val',cheId);
                $("#sel-up").toggle();
                $('.danger-notice').hide();//红色提示消失
                //    产品图片变换
                switch(cheId){
                  case 'mini':
                    $('.res-img').show();
                    $('.res-img img').attr('src','./static/img/autd-9hao.jpg');
                    break;
                  case 'mk2':
                    $('.res-img').show();
                    $('.res-img img').attr('src','./static/img/autd-a1.jpg');
                    break;
                  case 'plus':
                    $('.res-img').show();
                    $('.res-img img').attr('src','./static/img/autd-plus.jpg');
                    break;
                  case 'xfx':
                    $('.res-img').show();
                    $('.res-img img').attr('src','./static/img/autd-w1.jpg');
                    break;
                  case 'gokart':
                    $('.res-img').show();
                    $('.res-img img').attr('src','./static/img/autd-kading.jpg');
                    break;
                  default:
                    $('.res-img').hide();
                    break;
                }
              })
              $("#sel-up").on('click','.list-select',function (e) {
                e.preventDefault();
                $("#sel-up").toggle()
              })
              //输入序列号获取焦点是提示消失
              $('#serNum').focus(function () {
                $('.danger-notice').hide();//红色提示消失
              })
            $('#serNum').on('input',function () {
              $('.res-fail').hide();
              $('.res-font').hide();
              $('.danger-notice').hide();//红色提示消失
            })
          },
          yourRegisterRequest(url, params){
            var callbackName = ('jsonp_' + Math.random()).replace('.', '')
            params += '&callback=' + callbackName
            var o_scripts = document.getElementsByTagName("script")[0]
            var o_s = document.createElement('script')
            o_scripts.parentNode.insertBefore(o_s, o_scripts);
            //您注册请求的业务回调
            window[callbackName] = function(json) {
              if(json.result.code == 400||json.result.code == 600||json.result.code == 100 || json.result.code == 200||json.result.code == 700) {
                let serNumVals=$('#serNum').val();//输入的序列号
                let dataValues=$('.cheVal').attr('data-val'); //车型类型
                $.ajax({
                  type:'post',
                  url:'http://adminsystem.ninebot.cn/index/security_code/',
                  data:{    //这里是发送给后台的数据
                      num:serNumVals,
                      type:dataValues
                    },
                  success:function (res) {
                    $('#ser-load').hide();
                    if(res.code==200){
                      $('.res-font').show();
                      //将时间戳转为日期格式
                      function timestampToTime(timestamp) {
                        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                        var Y = date.getFullYear() + '-';
                        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                        var D = date.getDate() + ' ';
                        // var h = date.getHours() + ':';
                        // var m = date.getMinutes() + ':';
                        // var s = date.getSeconds();
                        return Y+M+D;
                      }
                      if(res.data.count===0){
                        $('#start').html('无');
                        $('#end').html('无');
                        $('#countall').html(res.data.count);
                      }else{
                        $('#start').html(timestampToTime(res.data.start_time));
                        $('#end').html(timestampToTime(res.data.end_time));
                        $('#countall').html(res.data.count);
                      }
                    }else{
                      $('.res-fail').show();
                      $('.res-font').hide();
                    }
                  }
                })
                nvcReset()
              }else if (json.result.code == 800 || json.result.code == 900) {
                //您的网络环境存在风险，不能查询
                //直接拦截
                $('#dangerous').show();
                nvcReset()
                // alert("register failed!")
              }
            }
            o_s.src = url + '?' + params
          },
          btnHandel(){
            $('#dangerous').hide();
            //点击查询按钮
            let serNumVal=$('#serNum').val();//输入的序列号
            let dataValue=$('.cheVal').attr('data-val'); //车型类型
            let  patt1=/^[A-Za-z0-9]+$/; //正则表达式，字母或数字
            if(dataValue==='0'){
              $('.danger-notice').html('请选择车型');
              $('.danger-notice').show();//红色提示出现
              return;
            }
            if(patt1.test(serNumVal) === false||serNumVal.length!==10)
            {
              $('.danger-notice').html('请输入正确的10位序列号（由英文字母或数字组成）');
              $('.danger-notice').show();//红色提示出现
              return false;
            }else{
              $('.danger-notice').hide();//红色提示消失
              $('#ser-load').show();//加载中
              // 以下getNVCVal()的值，跟随业务请求一起上传，由后端请求AnalyzeNvc接口，返回200，400，600或者800
              var params = 'a=' + getNVCVal()
              this.yourRegisterRequest('http://testwebit.ninebot.cn/system/public/index/security_code/verification', params)
            }
            // //点击查询按钮
            // let serNumVal=$('#serNum').val();//输入的序列号
            // let dataValue=$('.cheVal').attr('data-val'); //车型类型
            // let  patt1=/^[A-Za-z0-9]+$/; //正则表达式，字母或数字
            // if(dataValue==='0'){
            //   $('.danger-notice').html('请选择车型');
            //   $('.danger-notice').show();//红色提示出现
            //   return;
            // }
            // if(patt1.test(serNumVal) === false||serNumVal.length!==10)
            // {
            //   $('.danger-notice').html('请输入正确的10位序列号（由英文字母或数字组成）');
            //   $('.danger-notice').show();//红色提示出现
            //   return false;
            // }else{
            //   $('.danger-notice').hide();//红色提示消失
            //   $('#ser-load').show();//加载中
            //   // 以下getNVCVal()的值，跟随业务请求一起上传，由后端请求AnalyzeNvc接口，返回200，400，600或者800
            //   var params = 'a=' + getNVCVal()
            //   this.yourRegisterRequest('http://testwebit.ninebot.cn/system/public/index/security_code/verification', params)
            //   // this.yourRegisterRequest('http://cf.aliyun.com/nvc/nvcAnalyze.jsonp', params);
            //   // //
            //   //     this.axios.get('/porxyb/system/public/index/security_code/verification/?',{
            //   //         params:{
            //   //           a: {"a":"FFFF0N0000000000750B","c":"1545371164327:0.5079920734518695","d":"nvc_other_h5","h":{"key1":"code0","nvcCode":400},"j":{"test":1},"b":"114#S5EOohfmTTobkobraowZnC/0OwMjfRRuo5ByM1nd/pPojA1IVrZ7gVA91Q1PRtagFynOnbWd4VoOniTGYvDVOH8xCqysNm6u0TqQ+jwaK/0L09pG0oX+XVZePZEj+msjdfo1KCcpiO9XwKlFhK2v+OoawgK8jK5Wg8CAu/RMiOjWwKbFlY2gydTEBRvjiJIH3J8lKCJyijFWQJ1soY2039tame18iJIBTRMsX96UfMon8mTTo/7wfTsnTTzD/6zmTnmRrrJAQ63nTTj+zQ7mfTTTT9vZ26zmTTTlDmnUpom+vu7MvB9KeyFk7DSlmJ9JFiv4N3+E16MGh37Uhu2dk0pzBh/zhSOh2DG+rxoJa3Cn8aXnwMUjtywINvloa0ygFeo8hbM11Zm3aen7Z+6BAlRbkxvBaQg9lJbmh7com9mgizVpYyuf7fyqHFXErIIZGrHg+B3JntVzdgdl2Tc5VnvldD32bYY5IgEe2HKOVWxTuv3uEwCfrhxwNKvYZfTYrQLlRDg1GVmioNwwsvGz8SwTrzYSw/B5BGpyzR6KwYV0tDs4uIKlYrXZh+FI2YgtNG9894S+OK9rxlWFZs==","e":"IGYZ8ql4vaQ51vxSfIAFF-wAQfo5bEwKExS2NF3ZAN0vHU7GcUVBCRbFQ6TYW-vWtpo1yQ2LjvAGY1-QJDw9jerBDGouGWxCZM4FtN1hwlnngLbl9fYUKYu6Jvul7i0Ls3Fh2emgNdoN3UrjSFbKgvy5nTXa2BWUuzjSx0NNUhi9quro0Nl6uXMuYEMcXKjmYEIbp8PecyQr3Gmehfhpkw4N-ZjoFHBCdfB9f0mCtFs","i":true},
            //   //           callback: 'jsonp'
            //   //         }
            //   //     })
            //   //         .then((res) =>{
            //   //             console.log(res)
            //   //             this.datas=res.data;
            //   //         }).catch(function (error) {
            //   //     console.log(error);
            //   // });
            //   // //
            //   this.axios({
            //     method:'post',
            //     url:'/porxy/index/security_code/',
            //     // url:'http://adminsystem.ninebot.cn/index/security_code/',
            //     data:this.qs.stringify(
            //       {    //这里是发送给后台的数据
            //         num:serNumVal,
            //         type:dataValue
            //       }
            //     )
            //   }).then(function(res,reject){
            //     $('#ser-load').hide();
            //     if(res.data.code==200){
            //       $('.res-font').show();
            //       //将时间戳转为日期格式
            //       function timestampToTime(timestamp) {
            //         var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            //         var Y = date.getFullYear() + '-';
            //         var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            //         var D = date.getDate() + ' ';
            //         // var h = date.getHours() + ':';
            //         // var m = date.getMinutes() + ':';
            //         // var s = date.getSeconds();
            //         return Y+M+D;
            //       }
            //       if(res.data.count===0){
            //         $('#start').html('无');
            //         $('#end').html('无');
            //         $('#countall').html(res.data.count);
            //       }else{
            //         $('#start').html(timestampToTime(res.data.start_time));
            //         $('#end').html(timestampToTime(res.data.end_time));
            //         $('#countall').html(res.data.count);
            //       }
            //     }else{
            //       $('.res-fail').show();
            //       $('.res-font').hide();
            //     }
            //   })
            // }
          }
        },
    }
</script>

<style>
  @media screen and (min-width: 320px) {
    html,body {
      width:100%;
      font-size: 42.66667px;
      font-family: 'Microsoft Yahei', '微软雅黑', Helvetica, 'Hiragino Sans GB', Arial,  PingFangSC, sans-serif;
    } }

  @media screen and (min-width: 360px) {
    html,body {
      font-size: 48px; } }

  @media screen and (min-width: 375px) {
    html,body {
      font-size: 50px; } }

  @media screen and (min-width: 384px) {
    html,body {
      font-size: 51.2px; } }

  @media screen and (min-width: 412px) {
    html,body {
      font-size: 54.93333px; } }

  @media screen and (min-width: 414px) {
    html,body {
      font-size: 55.2px; } }

  @media screen and (min-width: 600px) {
    html,body {
      font-size: 80px; } }

  @media screen and (min-width: 750px) {
    html,body {
      font-size: 100px; } }
  @media screen and (min-width: 768px) {
    html,body {
      font-size: 102.4px;
      font-family: 'Microsoft Yahei', '微软雅黑', Helvetica, 'Hiragino Sans GB', Arial,  PingFangSC, sans-serif;
    }

  }
  html,body {
    width: 100%;
    min-height: 100%;
    overflow-x:hidden ;
  }
  *{
    padding:0;
    margin:0;
  }
  ul li{
    list-style: none;
  }
  /*加载中*/
  .testaly{
    margin:auto;
    max-width: 7.68rem;
    background: #fff;
  }
  #ser-load{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0);
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
    font-size: 0.26rem;
    color: rgb(255, 255, 255);
    line-height: 1.5rem;
    text-align: center;
    border-radius: 0.1rem;
    z-index: 2;
    display: none;
  }
  #ser-load-box{
    position: fixed;
    width: 3.5rem;
    height: 1.5rem;
    background: rgba(0, 0, 0, 0.8);
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
    font-size: 0.26rem;
    color: rgb(255, 255, 255);
    line-height: 1.5rem;
    text-align: center;
    border-radius: 0.1rem;
    z-index: 3;
  }
  #dangerous{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0);
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
    font-size: 0.26rem;
    color: rgb(255, 255, 255);
    line-height: 1.5rem;
    text-align: center;
    border-radius: 0.1rem;
    z-index: 2;
    display: none;
  }
  #dangerous-box{
    position: fixed;
    width: 4rem;
    height: 1.5rem;
    background: rgba(0, 0, 0, 0.8);
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
    font-size: 0.26rem;
    color: rgb(255, 255, 255);
    line-height: 1.5rem;
    text-align: center;
    border-radius: 0.1rem;
    z-index: 3;
  }
  header{
    width:100%;
    height: 0.88rem;
    background:#333333 ;
    font-size:0.34rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
  }
  /*选择车型*/
  .auth-search{
    width:100%;
    height: 5.39rem;
    background:url("../../static/img/auth-bg.png") ;
    background-size:100% ;
    background-repeat: no-repeat;
    position:relative;
  }
  .auth-select{
    width:100%;
    height: 0.88rem;
    background: rgba(255,255,255,0.52);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .auth-select-title{
    color:#333;
    font-size:0.34rem;
    margin-left:0.42rem;
  }
  .auth-icon-down{
    width:0.36rem;
    height: 0.21rem;
    display: block;
    margin-right:0.42rem;

  }
  /*车型列表*/
  .auth-search-list{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height: auto;
    background: #fff;
    display: none;
  }
  .list-select{
    width:100%;
    height: 0.88rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list-select-title{
    color:#333;
    font-size:0.34rem;
    margin-left:0.42rem;
  }
  .cheVal{
    color:#333;
    font-size:0.34rem;
  }
  .list-icon-down{
    width:0.36rem;
    height: 0.21rem;
    display: block;
    margin-right: 0.42rem;
    transform: rotateZ(180deg);

  }
  .list-detail{
    width:100%;
    background: #fff;
    color:#333;
    font-size:0.24rem;
  }
  .list-detail-li{
    margin:auto;
    width:80%;
    height: 0.88rem;
    border-bottom:1px solid #dddddd ;
    line-height: 0.88rem;
    cursor: pointer;

  }
  .list-detail-li:last-child{
    border:0;
  }
  /*序列号查询*/
  .search-xlh{
    width:100%;
    height:4.51rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*padding:1.22rem 0;*/
  }
  .xlh{
    font-size:0.46rem;
    color:#fff;
    width:100%;
    text-align: center;
    margin-bottom: 0.46rem;
  }
  .search-box{
    width: 6.76rem;
    height: 0.72rem;
    margin: 0 auto;
    border-radius: 4px;
  }
  .search-box .search-input-box{
    width:100%;
    height: 0.72rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
  }
  .search-box .search-input-box input{
    outline: none;
    border:0;
    width:4rem;
    height: 0.72rem;
    padding-left: 0.4rem;
    font-size:0.28rem;
    color:#333;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    display: flex;
    align-items: center;

  }
  .search-box .search-input-box input::-webkit-input-placeholder{
    font-size:0.28rem;
    color:#333;
  }
  .ser-btn{
    width:1.16rem;
    height: 0.72rem;
    background: #1981d8;
    font-size:0.28rem;
    color:#fff;
    text-align: center;
    line-height: 0.72rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .danger-notice{
    font-size:0.24rem;
    color:red;
    width:100%;
    height:  0.72rem;
    line-height: 0.72rem;
  }
  /*查询结果*/
  .ser-result{
    width:100%;
    padding-bottom: 0.5rem;
  }
  .res-font{
    text-align: center;
    padding-top:0.35rem;
    display: none;
  }
  .res-fail{
    text-align: center;
    padding-top:0.35rem;
    display: none;
  }
  .res-font p{
    padding:0.13rem 0;
  }
  .res-title{
    font-size:0.34rem;
    color:#000;
  }
  .res-detail{
    font-size:0.24rem;
    color:#000;
  }
  .res-img{
    width:6rem;
    height: 3.8rem;
    background: #ffffff;
    margin:auto;
    box-shadow: 0px 0px 8px 0px #dedddd;
    display: none;
    margin-top:0.4rem;
    overflow: hidden;
  }

  .res-img img{
    width:100%;
    height: auto;
    display: block;
  }
  /*防伪查询提示*/
  .auth-notice{
    width:100%;
  }
  .notice-title{
    width:100%;
    height: 0.88rem;
    background:#1981d8 ;
    font-size:0.28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
  }
  .notice-detail{
    width:6.78rem;
    margin:auto;
    border:1px solid #ddd;
    padding:0.36rem 0;
    margin-top:0.5rem;
    margin-bottom: 0.73rem;
  }
  .notice-detail p{
    font-size:0.24rem;
    color:#323232;
    padding-left: 0.8rem;
    line-height: 1.8;
  }

</style>
