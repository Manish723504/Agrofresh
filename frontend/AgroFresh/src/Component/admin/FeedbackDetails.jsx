function FeedbackDetails({feedbackArray})

{
return(
<>
<table class="table table-success table-striped">
   <thead>
   <tr>

 <th>Name</th>
 <th>Email</th>
<th>Rating</th>
<th>Message</th>

   </tr>
   
   </thead>


   <tbody>

   {
   feedbackArray.map((feedback)=>


    {

        return(
           
         <tr key={feedback._id}>
            <td>{feedback.name}</td>
            <td>{feedback.email}</td>
            <td>{feedback.rating}</td>
            <td>{feedback.remarks}</td>
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
export default FeedbackDetails