import { useEffect, useState } from "react";
const TodoList = () => {
  const [inputData, setInputData] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("working");
  };
  useEffect(() => {
    console.log(inputData);
  }, []);

  const handleOnchnage = (event: any) => {
    // setInputData(value);
    setInputData(event.target.value);
    console.log("the input :::", event.target.value);
  };
  return (
    <div className="flex h-lvh items-center justify-evenly gap-5">
      {/* second div */}

      <div className="mx-2 flex h-auto w-2/4 items-center rounded-[4px]">
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="mx-auto flex flex-col justify-center gap-4"
        >
          <label className="text-4xl" htmlFor="todobox">
            Enter Your todo list
          </label>
          <input
            type="text"
            name="todobox"
            onChange={handleOnchnage}
            className="w-[100%] border border-white bg-transparent px-4 py-2 text-2xl caret-neutral-50"
          />
          <button
            className="w-[100%] border-2 border-white py-3 duration-300 hover:border-black hover:bg-white hover:text-black"
            onClick={handleSubmit}
          >
            ADD
          </button>
        </form>
      </div>
      {/* second div */}
      <div className="mx-2 flex h-full w-2/4 border-0 border-l-2 border-white px-6 text-2xl">
        <h2 className="text-3xl">(-_-) Your data Goes down here</h2>
        {inputData.map((data, index) => (
          <ol
            key={index}
            className="list-inside list-disc space-y-4 text-gray-500 dark:text-gray-400"
          >
            <li>{data}</li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
