export default function Register(){


    return(
        <>
        <form action="http://127.0.0.1:3000/api/register" method="post">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
    <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email"/>
        
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>
        <label htmlFor="confirm">Confirm Password</label>
        <input type="password" name="confirm" id="confirm"/>
        <input type="submit" value="register"/>
        </form>
        </>
    )

}