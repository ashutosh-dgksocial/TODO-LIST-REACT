import { useState } from "react";

const ToDo = () => {
    const [inputValue, setInputValue] = useState('');
    const [originalArr, setOriginalArr] = useState([]);
    const [indexSaver, setIndexSaver] = useState(null);
    const [edit, setEdit] = useState(false);

    const handleInput = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === "") {
            alert('cannot put empty')
            return;
        };
        setOriginalArr([...originalArr, inputValue]);
        setInputValue('');
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const copyOfarr = [...originalArr];
        copyOfarr[indexSaver] = inputValue;
        setOriginalArr(copyOfarr);
        setIndexSaver(null);
        setEdit(false);
        setInputValue('');
    };

    const handleDelete = (index) => {
        const copyOfarr = [...originalArr];
        copyOfarr.splice(index, 1);
        setOriginalArr(copyOfarr);
    };

    const handleEdit = (index) => {
        setIndexSaver(index);
        setEdit(true);
        setInputValue(originalArr[index].trim());
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-700 mb-4">My To-Do List</h1>

                <form type="submit" onSubmit={edit === true ? handleUpdate : handleSubmit} className="flex flex-col items-center gap-4">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={inputValue}
                        onChange={handleInput}
                        className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <div className="flex gap-2 w-full">
                        {indexSaver === null ? (
                            <button
                                type="submit"
                                className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
                            >
                                Add Task
                            </button>
                        ) : (
                            <button
                                type="submit"
                                onClick={handleUpdate}
                                className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                            >
                                Update Task
                            </button>
                        )}
                    </div>
                </form>

                <div className="mt-6">
                    <h2 className="text-xl font-medium text-gray-800 mb-2">Tasks:</h2>
                    <div className="space-y-3">
                        {originalArr.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg shadow-sm">
                                <span className="text-lg font-medium text-gray-700 line-clamp-1">{index + 1}. {item}</span>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded hover:bg-yellow-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;
