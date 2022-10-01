// import React from "react";

// export default function FileUploadLocal() {
//     const [output, setOutput] = React.useState("")
//     function funcz(event) {
//         console.log(event.target.value)
//         // var input = file.target;
//         let reader = new FileReader();
//         reader.onload = function () {
//             var dataURL = reader.result;
//             let output2 = dataURL;
//             console.log(output2)
//             setOutput(output2)
//         };
//         reader.readAsDataURL(input.files[0]);
//     };

//     console.log(output)
//     return (
//         <div>
//             <h1>hi</h1>
//             <input
//                 type='file'
//                 id="filez"
//                 onChange={funcz}
//             />
//             <label htmlFor="filez">upload</label>
//             <img src="C:\fakepath\big_image.png" />
//         </div>
//     )
// }