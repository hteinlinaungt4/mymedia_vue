import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name : 'LoginView',
    data () {
        return {
            userdata: {
                email : '',
                password : '',
            },
            tokenstatus : false,
            loginincorrect : false,
        }
    },
    computed: {
       ...mapGetters(['gettoken','getuserdata']),
    },
    methods: {
        login () {
            let data ={
                email : this.userdata.email,
                password : this.userdata.password,
            }
            axios.post("http://127.0.0.1:8000/api/login",data).then((response)=>{
                if(response.data.token == null){
                    this.loginincorrect = true
                }else{
                    this.homePage();
                    this.$store.dispatch("gettoken",response.data.token);
                    this.$store.dispatch("getuserdata",response.data.user)
                }
            })
            .catch((error)=>{
                console.log(error);
            });
        },
        logout(){
            this.$store.dispatch("gettoken",null);
            this.loginPage();
        },
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
        check(){
            console.log(this.gettoken);
            console.log(this.getuserdata);
        }
    }
}
