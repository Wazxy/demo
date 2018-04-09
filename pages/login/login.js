
Page({
  data: {
    username: '',
    password: ''
  },
 
 phoneInput :function(e){
   this.setData({
     username: e.detail.value
   })
 },

 passwordInput :function(e){
   this.setData({
     password: e.detail.value
   })
 },

 login: function(){
   if(this.data.username.length == 0 || this.data.password.length == 0){
     wx.showToast({
       title: '不能为空',
       icon: 'loading',
       duration: 2000
     })
   }else{
     wx.showToast({
       title: '登录成功',
       icon: 'success',
       duration: 2000
     })
     wx.navigateTo({
       url:'../main/main'
     })
   }
     
 }

})