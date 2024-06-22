'use client'

import { useChat } from "ai/react"
import { Button } from "../ui/button"

const Chat = () => {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/openai'
    }) 


  return (
    <section>
        <div>
            {messages.map((m, i) => (
                <p key={i}>
                    {m.role === "user" ? 'User: ' : 'AI: '}
                    {m.content}
                </p>
            ))}
        </div>
        <div>
            <form onSubmit={handleSubmit} className="border rounded-md p-2">
                <input type="text" placeholder="enter text" className="focus:outline-none" onChange={handleInputChange} value={input} />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    </section>
  )
}

export default Chat