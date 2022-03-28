import axios from "axios";
//Axios GLOBALS // set global token 
axios.defaults.headers.common['X-Auth-Token'] = 'kjshdkshdiued,scsdclsdkf;sdfksdjskdd'

// get
function getTodos() {
  axios({
    method: "get",
    url: "https://api.com",
    params: {
      _limit: 5,
      timeout: 5000
    }
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  // or
  axios
    .get("https://api.com", { params: { _limit: 5 } })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  //or
  axios
    .get("https://api.com?_limit=5")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

// post
function postTodo() {
  axios({
    method: "post",
    url: "https://api.com",
    data: {
      title: "New Post",
      completed: false
    }
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  //or
  axios
    .post("https://api.com", {
      title: "New Post",
      completed: false
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

// Put/Patch - takes key to update
// put will replace the entire data
// patch will update the exisiting data
function putpatchTodos() {
  axios
    .post("https://api.com/1", {
      title: "New Post",
      completed: false
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  //patch
  axios
    .patch("https://api.com/1", {
      title: "New Post",
      completed: false
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

//delete
function deleteTodo() {
  axios
    .delete("https://api.com/1")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

// custom headers
function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "jsontoken"
    }
  };
  axios
    .post(
      "http://api.com/posts?_limit=5",
      {
        title: "new post",
        completed: false
      },
      config
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

// error handling
function errorHandling(){
    axios
    .get("https://api.comss", {
        validateStatus: function(status){
            return status< 500;
        }
    })
    .then((res) => console.log(res.data))
    .catch((err) => {
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);

            if(err.response.status == 404){
               // do something
            }
        }else if(err.request){
            console.log(err.request);
        }else{
            console.log(err.message)
        }

    });
}

// Cancel Request 
function cancelRequest (){
    const source = axios.CancelToken.source();
    axios.get('https;//typicode.com/todos',{
        cancelToken:source.token
    }).then(res => console.log(res))
    .catch((err)=>{
        if(axios.isCancel(err)){
            console.log('err is thrown',err.message)
        }
    })

    if(someconditin ==true){
        source.cancel('Request canceled!')
    }
}

// simultaneous requests same time
function simultaneousReq() {
  axios
    .all([
      axios.get("https://api.com/todos?_limit=5"),
      axios.get("https://api.com/posts?_limit=5")
    ])
    .then(axios.spread((todos, posts) => console.log(posts)))
    .catch((err) => console.log(err));
}



//interceptors request and response= to perform somthing before every request for eg add logger
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


//Transform request and responses

//https://www.youtube.com/watch?v=6LyagkoRWYA



//Axios Instance

const axiosInstance = axios.create({
    baseURL:'htpps://typicode.com',
    //other settings
})
axiosInstance.get('/comments').then((res)=>console.log(res))