import { GoogleGenerativeAI } from "@google/generative-ai"
const apiKey=process.env.API.toString()
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


async function getSummary(req,res){
  try {
    const {text}=req.body
    // console.log(text)
    const prompt = `summarize the given data and answer in one single paragraph.if the data is in different languages, in that case also give the result in english follow it strictly only english data:${text}`;
    const result = await model.generateContent(prompt);
// console.log(result.response.text());
    // const summary=await getSummary(text)
    res.json({
      "message":result.response.text(),
    })
   

  } catch (error) {
        console.log(error)
        res.status(500).json({
            "message":"Internal server error"
        })
    
  }

}
export default getSummary