<template>
    <div class="mt-5">
        <p class="btn btn-danger btn-sm mx-3" @click="homePage()">Home</p>
        <p v-if="!loginstatus" class="btn btn-danger btn-sm" @click="loginPage()" >Login</p>
        <p v-else class="btn btn-danger btn-sm" @click="logout()" >Logout</p>
    </div>
   
   <div class="container">
        <div class="row p-5">
            <div class="col-md-6 offset-3">
                    <div class="alert alert-danger" v-if="loginincorrect" role="alert">
                        Email or Password is Wrong!
                    </div>
                    <div class="mb-3">
                        <label>Email address</label>
                        <input type="email" class="form-control" v-model="userdata.email">
                    </div>
                    <div class="mb-3">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="userdata.password">
                    </div>
                    <!-- <button class="mx-3 text-black btn-warning" @click="check()">Check</button> -->
                    <button type="submit" class="btn btn-primary" @click="login()">Login</button>
            </div>
        </div>
   </div>
</template>
<script src="../js/LoginView.js"></script>