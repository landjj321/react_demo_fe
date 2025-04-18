import Mock from 'mockjs'

function wrapper(data){
    return {
        result: data,
        result_code: 2000,
        err_msg: 'ok',
        timestamp: parseInt(new  Date().getTime()/1000)
    }
}

Mock.setup({
    timeout:200-600
})


Mock.mock('/test',wrapper({
    data:1,
    name:123,
    age:13
}));