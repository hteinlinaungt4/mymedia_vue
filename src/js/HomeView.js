import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "HomeView",
    data () {
        return {
            postlist : {},
            categorylist : {},
            postsearch : '',
            loginstatus : false,
        }
    },
    computed: {
        ...mapGetters(['gettoken','getuserdata']),
    },
    methods: {
        loginPage(){
            this.$router.push({
                name : 'login',
            })
        },
        homePage(){
            this.$router.push({
                name : 'home',
            })
        },
        logout(){
            this.$store.dispatch("gettoken",null);
            this.loginPage();
        },
        getpostall() {
            axios.get("http://127.0.0.1:8000/api/allpost").then((response) => {
           
            for (let i = 0; i < response.data.post.length; i++) {
                if(response.data.post[i].image == null){
                    response.data.post[i].image = "http://localhost:8000/storage/404.png";
                }else{
                    response.data.post[i].image = "http://localhost:8000/storage/"+response.data.post[i].image;
                }
            }
            this.postlist=response.data.post;
            });
        },
        getcategroyall(){
            axios.get("http://127.0.0.1:8000/api/allcategory").then((response)=>{
                this.categorylist =response.data.category;
            });

        },
      psearch(){
        let data ={
            'key' : this.postsearch,
        }
        axios.post("http://127.0.0.1:8000/api/post/search",data).then((response)=>{
            for (let i = 0; i < response.data.post.length; i++) {
                if(response.data.post[i].image == null){
                    response.data.post[i].image = "http://localhost:8000/storage/404.png";
                }else{
                    response.data.post[i].image = "http://localhost:8000/storage/"+response.data.post[i].image;
                }
            }
            this.postlist=response.data.post
        });
      },
      searchcategory(search){
        let data ={
            'key' : search,
        }
        axios.post("http://127.0.0.1:8000/api/category/search",data).then((response)=>{
            for (let i = 0; i < response.data.post.length; i++) {
                if(response.data.post[i].image == null){
                    response.data.post[i].image = "http://localhost:8000/storage/404.png";
                }else{
                    response.data.post[i].image = "http://localhost:8000/storage/"+response.data.post[i].image;
                }
            }
            this.postlist=response.data.post
        });
      },
      detailpost(postid){
        this.$router.push({
            name : 'postdetail',
            params: {
                id: postid,
            }
        });
    },
    checklogin(){
        if(this.gettoken != null && this.gettoken !="" && this.gettoken != undefined){
            this.loginstatus = true;
        }else{
            this.loginstatus = false;
        }
        // console.log(this.gettoken);
    }
    },
    mounted () {
        
        this.checklogin();
      this.getpostall();
      this.getcategroyall();
    }
  };