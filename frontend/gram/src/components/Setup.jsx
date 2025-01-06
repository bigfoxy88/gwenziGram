export default function Setup(){


    return(
        <>
        <form action="" method="post"  encType="multipart/form-data">
             <label htmlFor="propic">Add a profile Picture: </label>
             <input type="file" name="propic" id="propic" accept="image/*" />
              <label htmlFor="bio">tell us a little bit about yourself</label>
              <textarea name="bio" id="bio" required></textarea>
            <button type="submit">finish up</button>
        
        </form>
        </>
    )
}