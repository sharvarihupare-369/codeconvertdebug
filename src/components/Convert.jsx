import { Box, Button, Flex, HStack, Heading ,Select,Text,Textarea } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import Loader from './Loader'

const Convert = () => {

  const [language,setLanguage] = useState("")
  const [code,setCode] = useState("")
  const [result,setResult] = useState("")
  const [loading,setLoading] = useState(false)
  

  const handleConvert = () => {
    const codeDetails = {
      code ,
      language
    }
    setLoading(true)
      axios.post("https://convertbackend.onrender.com/code/convert",codeDetails).then((res)=>{
        // console.log(res.data)
        setLoading(false)
        setResult(res.data)
      }).catch(err=>{
        setLoading(false)
        console.log(err)
      })
  }

  const handleDebug = () => {
    const codeDetails = {
      code 
    }
    setLoading(true)
      axios.post("https://convertbackend.onrender.com/code/debug",codeDetails).then((res)=>{
        // console.log(res.data)
        setLoading(false)
        setResult(res.data)
      }).catch(err=>{
        setLoading(false)
        console.log(err)
      })
  }

  const handleQuality = () => {
    const codeDetails = {
      code 
    }
    setLoading(true)
      axios.post("https://convertbackend.onrender.com/code/qualitycheck",codeDetails).then((res)=>{
        // console.log(res.data)
        setLoading(false)
        setResult(res.data)
      }).catch(err=>{
        setLoading(false) 
        console.log(err)
      })
  }

  return (
    <>
      <Box bg="#0D1117"  p="10px">
         <Heading textTransform={"uppercase"} color={"white"} textAlign={"center"}>Code Converter</Heading>
         <Flex w="90%" m="30px auto" direction={{base:"column",sm:"column",md:"column",lg:"row",xl:"row","2xl":"row"}} justifyContent={{base:"center",sm:"center",md:"center",lg:"space-between",xl:"space-between","2xl":"space-between"}}  >
           <Box w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }} >   

             <Flex direction={{base:"column",sm:"column",md:"column",lg:"row",xl:"row","2xl":"row"}}  alignItems={"center"}>    

             <Text fontSize={"20px"} color={"white"}>Convert to :-</Text>
             <Select   value={language} onChange={(e)=>setLanguage(e.target.value)} ml="10px" w="50%">
               <option  value={"javascript"}>JavaScript</option>
               <option value={"typescript"}>TypeScript</option>
               <option value={"java"}>Java</option>
               <option value={"python"}>Python</option>
               <option value={"ruby"}>Ruby</option>
               <option value={"c++"}>C++</option>
               <option value={"c#"}>C#</option>
               <option value={"go"}>Go</option>
             </Select>
             </Flex>
           </Box>
           <Box  w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }} >
             <Flex mt={{base:"10px",sm:"10px",md:"10px",lg:"0px",xl:"0px","2xl":"0px"}} direction={{base:"column",sm:"column",md:"column",lg:"row",xl:"row","2xl":"row"}} justifyContent={"center"} alignItems={"center"}>
              
               <Button isDisabled={!code ||  !language} bg="#fb923c" onClick={handleConvert}  borderRadius={"5px 5px 0 0"} color={"white"}>Convert</Button>

               <Button  isDisabled={!code} bg="#fb923c" onClick={handleDebug} borderRadius={"5px 5px 0 0"} m={{ base: "10px 0", sm: "10px 0", md: "10px 0", lg: "0 50px", xl: "0 50px", "2xl": "0 50px" }} color={"white"}>Debug</Button>

               <Button isDisabled={!code} bg="#fb923c" onClick={handleQuality} borderRadius={"5px 5px 0 0"} color={"white"}>Quality Check</Button>
             </Flex>
           </Box>
         </Flex>
   









         <Flex w="90%" m="30px auto" direction={{base:"column",sm:"column",md:"column",lg:"row",xl:"row","2xl":"row"}}   justifyContent={"space-between"}>
   
     <Box w={{ base: "100%", sm: "100%", md: "48%", lg: "48%", xl: "48%", "2xl": "48%" }} h="75vh" bg="#F5F5F5" borderRadius={"3px"}  >   
     <Textarea border={"1px solid gray"}  placeholder='Write your code here...' value={code} onChange={(e)=>setCode(e.target.value)} w="95%" m="10px 10px" h="70vh" />
     </Box>
   
     <Box w={{ base: "100%", sm: "100%", md: "48%", lg: "48%", xl: "48%", "2xl": "48%" }} mt={{base:"10px",sm:"10px",md:"10px",lg:"0px",xl:"0px","2xl":"0px"}} h="75vh" bg="#E6E6E6" borderRadius={"3px"}   display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative">
     {
      
         loading ?   <div className="loader" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <div className="loader-inner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div> :      <Textarea isReadOnly={true} border={"1px solid gray"} placeholder='Response will be here...' value={result} w="95%" m="10px 10px" h="70vh" />

     }
      
   </Box>
   </Flex>
   
        
       </Box>
     
     </>
  )
}

export default Convert