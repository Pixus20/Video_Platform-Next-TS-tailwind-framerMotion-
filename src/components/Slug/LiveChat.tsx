
const LiveChat = () => {
  return (
    <div className="h-[40vh] xl:h-[804px]   flex flex-col items-center justify-between">
      <h1 className="w-[100%] text-center">Live chat</h1>
      <input
        type="text"
        placeholder="Type a message"
        className="border px-2 py-1 w-full fixed bottom-2 xl:static"
      />
    </div>
  )
}

export default LiveChat
