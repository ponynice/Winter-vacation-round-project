var data = {
    username: '',
    pwd: '',
    showPwd: false,
}
new Vue({
    el: '#container',
    data: data,
    methods: {
        Finish: function () {
            axios.get('', {
                params: {
                    username: this.username,
                    password: this.pwd
                }
            }).then((response) => {
                console.log(response.data);
                alert("登录成功");
            }).catch(function (error) {
                console.log(error);
            })
        }
    }
})