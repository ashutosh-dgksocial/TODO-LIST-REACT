import { useEffect, useState } from "react";

const ToDo = () => {
    const [inputValue, setInputValue] = useState('');
    const [originalArr, setOriginalArr] = useState([]);
    const [indexSaver, setIndexSaver] = useState(null);
    const [edit, setEdit] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [isEditBtnDisabled, setisEditBtnDisabled] = useState(false);

    const handleInput = (e) => {
        const value = e.target.value;
        if (!value.trim()) {
            setIsBtnDisabled(true);

        }
        setInputValue(value);
        setIsBtnDisabled(value.trim() === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const TrimedInpData = inputValue.trim();
        if (!TrimedInpData) return;
        if (TrimedInpData.length > 30) {
            alert('text should be less then 30 letters')
            return
        }
        if (originalArr.includes(TrimedInpData)) {
            alert('This text alreay taken')
            return;
        };

        setOriginalArr([...originalArr, TrimedInpData]);
        setInputValue('');
        setIsBtnDisabled(true);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (indexSaver === null) {
            alert("Invalid task index");
            return;
        }
        const trimmedValue = inputValue.trim();

        if (!trimmedValue) {
            alert('Cannot update with an empty task');
            return;
        }
        const copyOfarr = [...originalArr];
        copyOfarr[indexSaver] = trimmedValue;

        setOriginalArr(copyOfarr);
        setIndexSaver(null);
        setEdit(false); // Hide the Update button (or toggle add btn)
        setInputValue('');
        setisEditBtnDisabled(false)

    };

    const handleDelete = (myindex) => {
        const copyOfarr = [...originalArr];
        // copyOfarr.splice(myindex, 1);
        // setOriginalArr(copyOfarr);
        const filteredArr = copyOfarr.filter((_, index) => index !== myindex) // condition 2 !== 2 --removed
        setOriginalArr(filteredArr);
    };

    const handleEdit = (index) => {
        setisEditBtnDisabled(true);
        if (index < 0 || index >= originalArr.length) {
            alert("Invalid task index");
            return;
        }
        setIndexSaver(index);
        setEdit(true);
        const selectedValue = originalArr[index].trim();
        setInputValue(selectedValue);
        setIsBtnDisabled(selectedValue.trim() === "" ? true : false);
    };
    useEffect(() => {
        console.log(isEditBtnDisabled);
    }, [isEditBtnDisabled])

    return (
        <div className="flex items-center justify-center min-h-screen bg-black-300">
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
                        {!edit ? (
                            <button
                                type="submit"
                                disabled={isBtnDisabled}
                                className={`w-full cursor-pointer px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 ${isBtnDisabled ? "bg-gray-500 hover:bg-gray-500 cursor-not-allowed" : ""}`}
                            >
                                Add Task
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isBtnDisabled}
                                onClick={handleUpdate}
                                className={`w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 ${isBtnDisabled ? "bg-gray-500 hover:bg-gray-500 cursor-not-allowed" : ""}`}
                            >
                                Update Task
                            </button>
                        )}
                    </div>
                </form>

                <div className="mt-6 h-[20rem] overflow-y-auto">
                    <h2 className="text-xl font-medium text-gray-800 mb-2">Tasks:</h2>
                    <div className="space-y-3 ">
                        {originalArr.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-200 rounded-lg shadow-sm">
                                <span className="text-lg font-medium text-gray-700 line-clamp-1">{index + 1}. {item}</span>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        disabled={isEditBtnDisabled}
                                        className={`px-3 py-1 cursor-pointer text-sm font-semibold text-white bg-yellow-500 rounded hover:bg-yellow-600 ${isEditBtnDisabled === true ? "!cursor-not-allowed !bg-gray-300 !hover:bg-gray-300" : ''}`}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        disabled={isEditBtnDisabled}
                                        className={`px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600  ${isEditBtnDisabled === true ? "!cursor-not-allowed !bg-gray-300 !hover:bg-gray-300" : ''}`}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ToDo;
