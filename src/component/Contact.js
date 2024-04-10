const Contact = () => {
  return (
    <div>
      <h2>This is contact page</h2>
      <form className="flex flex-col w-6/12 m-auto">
        <input
          className="border rounded-lg my-2 p-2"
          type="text"
          placeholder="name"
          required
        />
        <input
          className="border rounded-lg h-[100px] my-2 px-2"
          type="text"
          placeholder="message"
          required
        />
        <button className="border rounded-2xl bg-blue-600 text-white justify-center my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
