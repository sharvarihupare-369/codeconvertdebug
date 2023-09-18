import { Box, Button, Flex, HStack, Heading ,Select,Text,Textarea } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const Convert = () => {

  const [language,setLanguage] = useState("")
  const [code,setCode] = useState("")
  const [result,setResult] = useState("")
  

  const handleConvert = () => {
    const codeDetails = {
      code ,
      language
    }
      axios.post("https://convertbackend.onrender.com/code/convert",codeDetails).then((res)=>{
        // console.log(res.data)
        setResult(res.data)
      }).catch(err=>{
        console.log(err)
      })
  }

  const handleDebug = () => {
    const codeDetails = {
      code 
    }
      axios.post("https://convertbackend.onrender.com/code/debug",codeDetails).then((res)=>{
        // console.log(res.data)
        setResult(res.data)
      }).catch(err=>{
        console.log(err)
      })
  }

  const handleQuality = () => {
    const codeDetails = {
      code 
    }
      axios.post("https://convertbackend.onrender.com/code/qualitycheck",codeDetails).then((res)=>{
        // console.log(res.data)
        setResult(res.data)
      }).catch(err=>{
        console.log(err)
      })
  }

  return (
    <Box bg="#0D1117"   h="100vh">
      <Heading textTransform={"uppercase"} color={"white"}>Code Converter</Heading>
      <Flex w="90%" m="30px auto"  justifyContent={"space-between"}>
        <Box w="50%" >   
          <Flex  alignItems={"center"}>    
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
        <Box w="50%">
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Button bg="#fb923c" onClick={handleConvert}  borderRadius={"5px 5px 0 0"} color={"white"}>Convert</Button>
            <Button bg="#fb923c" onClick={handleDebug} borderRadius={"5px 5px 0 0"} m="0 50px" color={"white"}>Debug</Button>
            <Button bg="#fb923c" onClick={handleQuality} borderRadius={"5px 5px 0 0"} color={"white"}>Quality Check</Button>
          </Flex>
        </Box>
      </Flex>

      <Flex w="90%" m="30px auto"  justifyContent={"space-between"}>

  <Box w="48%" h="75vh" bg="#F5F5F5" borderRadius={"3px"}  >   
  <Textarea border={"1px solid gray"}  placeholder='Write your code here...' value={code} onChange={(e)=>setCode(e.target.value)} w="95%" m="20px auto" h="70vh" />
  </Box>

  <Box w="48%" h="75vh" bg="#E6E6E6" borderRadius={"3px"}>
  <Textarea isReadOnly={true} border={"1px solid gray"} placeholder='Response will be here...' value={result} w="95%" m="20px auto" h="70vh" />
   
</Box>
</Flex>

     
    </Box>
  )
}

export default Convert