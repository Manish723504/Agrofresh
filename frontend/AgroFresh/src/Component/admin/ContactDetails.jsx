function ContactDetails({contactArray})

{
return(
<>
<table class="table table-success table-striped">
   <thead>
   <tr>

 <th>Name</th>
 <th>Email</th>
<th> PhoneNumber</th>
<th> message</th>

   </tr>
   
   </thead>


   <tbody>

   {
   contactArray.map((contact)=>


    {

        return(
           
         <tr key={contact._id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.message}</td>
         </tr>
            
        )
    }
)

   }

   </tbody>
</table>


</>
)    
}
export default ContactDetails