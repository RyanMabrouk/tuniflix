import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useSelector } from 'react-redux'

function ChatbotApp({prompt}) {
  const UsersApiKey = useSelector((state) => state.home.API_KEY);
  const [response, setResponse] = useState("");
  const [err, setErr] = useState(null);
  const configuration = new Configuration({ apiKey: `${UsersApiKey}` });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Viewers sentiment for ${prompt} movie, pos & neg 5 Points each`,
        temperature: 0.5,
        max_tokens: 2000,
      });
      setResponse(result.data.choices[0].text);
    } catch (error) {
      setErr(error);
    }
  };

  return (
    <div>
      {(response || err) ? (
        response ? (
          <div className="GPT_response">
            {response.split("\n").map((x, i) => {
              return ["positive", "Positive", "negative", "Negative"].some((el) =>
                x.includes(el)
              ) ? (
                <div className="bold">{x}</div>
              ) : (
                <div key={i}>{x}</div>
              );
            })}
          </div>
        )
        : 
        err && <div style={{color:'#919191d1'}}>{JSON.stringify(err.message)}(check updating your API Key)<button onClick={()=>(window.location.reload())}>refresh</button></div>
      ) : (
        <form className="viewResponse" onSubmit={handleSubmit}>
          <button type="submit">view response</button>
        </form>
      )}
    </div>
  );
  
  



}

export default ChatbotApp;
