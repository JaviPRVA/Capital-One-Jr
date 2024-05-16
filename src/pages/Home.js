import Navbar from "../components/Navbar";
import React, { useState } from "react";
import piggy from "../assets/piggy.png";
import coin from "../assets/coin.png";
import jar from "../assets/jar.png";
import peso from "../assets/peso.png";

function Home() {
    const [progress, setProgress] = useState(0);

    const totalMoney = 100;

    const updateProgress = () => {
        const newProgress = progress + 20;
        if (newProgress <= 100) {
            setProgress(newProgress);
        }
    };

    const moneyAmount = (progress / 100) * totalMoney;

    const [popupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

    const [popupVisible2, setPopupVisible2] = useState(false);

    const togglePopup2 = () => {
        setPopupVisible2(!popupVisible2);
    };

    const [popupVisible3, setPopupVisible3] = useState(false);

    const togglePopup3 = () => {
        setPopupVisible3(!popupVisible3);
    };

    const [popupVisible4, setPopupVisible4] = useState(false);

    const togglePopup4 = () => {
        setPopupVisible4(!popupVisible4);
    };

    const [popupVisible5, setPopupVisible5] = useState(false);

    const togglePopup5 = () => {
        setPopupVisible5(!popupVisible5);
    };

    const [totalAmount, setTotalAmount] = useState(0);

    const addCoin = (amount) => {
        setTotalAmount((prevTotal) => prevTotal + amount);
    };

    const subCoin = (amount) => {
        setTotalAmount((prevTotal) => prevTotal - amount);
    };

    const [radioButtonSelected, setRadioButtonSelected] = useState(false);

    const [selectedItems, setSelectedItems] = useState([]);
    const handleItemSelection = (itemName) => {
        if (selectedItems.includes(itemName)) {
            setSelectedItems(selectedItems.filter((item) => item !== itemName));
        } else {
            setSelectedItems([...selectedItems, itemName]);
        }
    };

    const [newTask, setNewTask] = useState("");
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const [tasks, setTasks] = useState([]);
    return (
        <div className="Home">
            <div>
                <Navbar />
            </div>
            <div className="bg-[#053C59] h-screen">
                <div className="justify-center mx-auto flex flex-col items-center">
                    <img
                        src={piggy}
                        alt="piggy"
                        className="pt-20 w-[500px] h-auto"
                    />

                    <div className="w-[400px] h-7 bg-gray-200 mt-4 rounded-full">
                        <div
                            className="animate-pulse h-full bg-[#D22C27] rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <p className="mt-2 text-white">{`Amount: $${moneyAmount.toFixed(
                        2
                    )}`}</p>

                    <div className="flex justify-center items-center">
                        {/* this is the first pop-up task for counting coins */}
                        <button
                            onClick={togglePopup}
                            className="focus:outline-none"
                        >
                            <img
                                src={coin}
                                alt="coin"
                                className="m-4 pt-20 w-[125px] h-auto animate-pulse"
                            />
                            <h1 className="text-white text-[25px]">Task 1</h1>
                        </button>
                        {/* popup code */}
                        {popupVisible && (
                            <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                                <div className="bg-white p-8 rounded-md">
                                    <h2 className="text-xl font-bold mb-4">
                                        Task 1: Counting Coins
                                    </h2>
                                    <p>
                                        Count the coins in the jar and calculate
                                        the total value.
                                    </p>
                                    <div className="flex justify-center items-center mx-auto">
                                        <img
                                            src={jar}
                                            alt="jar"
                                            className="pt-20 w-[300px] h-auto"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="flex flex-col mt-4">
                                            <button
                                                onClick={() => addCoin(0.01)}
                                            >
                                                Add Penny
                                            </button>
                                            <button
                                                onClick={() => addCoin(0.05)}
                                            >
                                                Add Nickel
                                            </button>
                                            <button
                                                onClick={() => addCoin(0.1)}
                                            >
                                                Add Dime
                                            </button>
                                            <button
                                                onClick={() => addCoin(0.25)}
                                            >
                                                Add Quarter
                                            </button>
                                        </div>
                                        <div className="flex flex-col mt-4">
                                            <button
                                                onClick={() => subCoin(0.01)}
                                            >
                                                Subtract Penny
                                            </button>
                                            <button
                                                onClick={() => subCoin(0.05)}
                                            >
                                                Subtract Nickel
                                            </button>
                                            <button
                                                onClick={() => subCoin(0.1)}
                                            >
                                                Subtract Dime
                                            </button>
                                            <button
                                                onClick={() => subCoin(0.25)}
                                            >
                                                Subtract Quarter
                                            </button>
                                        </div>
                                    </div>

                                    <p>
                                        Total Amount: ${totalAmount.toFixed(2)}
                                    </p>
                                    {/* only appears if total amount = 2.59 */}
                                    {Math.abs(totalAmount - 2.59) < 0.01 && (
                                        <button
                                            onClick={() => {
                                                togglePopup();
                                                updateProgress();
                                            }}
                                        >
                                            Finish
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* this is the second pop-up task */}

                        <button
                            onClick={togglePopup2}
                            className="focus:outline-none"
                        >
                            <img
                                src={coin}
                                alt="coin"
                                className="m-4 pt-20 w-[125px] h-auto animate-pulse"
                            />
                            <h1 className="text-white text-[25px]">Task 2</h1>
                        </button>
                        {popupVisible2 && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                                <div className="bg-white p-8 rounded-md">
                                    <h2 className="text-xl font-bold mb-4">
                                        Task 2: Saving Goals
                                    </h2>
                                    <p>
                                        Set a savings goal for something you
                                        want to buy.
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Enter your savings goal..."
                                        className="border rounded-md p-2 mt-4 w-full"
                                    />
                                    <button
                                        onClick={() => {
                                            togglePopup2();
                                            updateProgress();
                                        }}
                                    >
                                        Finish
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* this is the third pop-up task */}

                        <button
                            onClick={togglePopup3}
                            className="focus:outline-none"
                        >
                            <img
                                src={coin}
                                alt="coin"
                                className="m-4 pt-20 w-[125px] h-auto animate-pulse"
                            />
                            <h1 className="text-white text-[25px]">Task 3</h1>
                        </button>
                        {popupVisible3 && (
                            <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                                <div className="bg-white p-8 rounded-md">
                                    <h2 className="text-xl font-bold mb-4">
                                        Task 3: Identifying Currency
                                    </h2>
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={peso}
                                            alt="peso"
                                            className="m-4 pt-20 w-[400px] h-auto"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start space-y-2">
                                        <div>
                                            <input
                                                type="checkbox"
                                                id="radioButton1"
                                                onChange={() =>
                                                    setRadioButtonSelected(1)
                                                }
                                                checked={
                                                    radioButtonSelected === 1
                                                }
                                            />
                                            <label
                                                htmlFor="radioButton1"
                                                className="ml-2"
                                            >
                                                Mexican Peso (MXN)
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                type="checkbox"
                                                id="radioButton2"
                                                onChange={() =>
                                                    setRadioButtonSelected(2)
                                                }
                                                checked={
                                                    radioButtonSelected === 2
                                                }
                                            />
                                            <label
                                                htmlFor="radioButton2"
                                                className="ml-2"
                                            >
                                                US Dollar (USD)
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                type="checkbox"
                                                id="radioButton3"
                                                onChange={() =>
                                                    setRadioButtonSelected(3)
                                                }
                                                checked={
                                                    radioButtonSelected === 3
                                                }
                                            />
                                            <label
                                                htmlFor="radioButton3"
                                                className="ml-2"
                                            >
                                                British Pound (GBP)
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                type="checkbox"
                                                id="radioButton4"
                                                onChange={() =>
                                                    setRadioButtonSelected(4)
                                                }
                                                checked={
                                                    radioButtonSelected === 4
                                                }
                                            />
                                            <label
                                                htmlFor="radioButton4"
                                                className="ml-2"
                                            >
                                                Japanese Yen (JPY)
                                            </label>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        {radioButtonSelected === 1 && (
                                            <button
                                                onClick={() => {
                                                    togglePopup3();
                                                    updateProgress();
                                                }}
                                            >
                                                Finish
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* this is the third pop-up task */}

                        <button
                            onClick={togglePopup4}
                            className="focus:outline-none"
                        >
                            <img
                                src={coin}
                                alt="coin"
                                className="m-4 pt-20 w-[125px] h-auto animate-pulse"
                            />
                            <h1 className="text-white text-[25px]">Task 4</h1>
                        </button>
                        {popupVisible4 && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                                <div className="bg-white p-8 rounded-md w-96">
                                    <h2 className="text-xl font-bold mb-4">
                                        Grocery Shopping Simulation
                                    </h2>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">
                                                Choose your items:
                                            </h3>
                                            <div className="space-y-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        onChange={() =>
                                                            handleItemSelection(
                                                                "Milk"
                                                            )
                                                        }
                                                        checked={selectedItems.includes(
                                                            "Milk"
                                                        )}
                                                    />
                                                    <span className="ml-2">
                                                        Milk
                                                    </span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        onChange={() =>
                                                            handleItemSelection(
                                                                "Bread"
                                                            )
                                                        }
                                                        checked={selectedItems.includes(
                                                            "Bread"
                                                        )}
                                                    />
                                                    <span className="ml-2">
                                                        Bread
                                                    </span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        onChange={() =>
                                                            handleItemSelection(
                                                                "Eggs"
                                                            )
                                                        }
                                                        checked={selectedItems.includes(
                                                            "Eggs"
                                                        )}
                                                    />
                                                    <span className="ml-2">
                                                        Eggs
                                                    </span>
                                                </label>
                                                {/* Add more items here if needed */}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">
                                                Your cart:
                                            </h3>
                                            <ul>
                                                {selectedItems.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            onClick={() => {
                                                togglePopup4();
                                                updateProgress();
                                            }}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Finish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* this is the fifth pop-up task */}

                        <button
                            onClick={togglePopup5}
                            className="focus:outline-none"
                        >
                            <img
                                src={coin}
                                alt="coin"
                                className="m-4 pt-20 w-[125px] h-auto animate-pulse"
                            />
                            <h1 className="text-white text-[25px]">Task 5</h1>
                        </button>
                        {popupVisible5 && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                                <div className="bg-white p-8 rounded-md w-96">
                                    <h2 className="text-xl font-bold mb-4">
                                        To-Do List
                                    </h2>

                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder="Enter task..."
                                            className="pb-4 border rounded-md py-2 px-3 w-full"
                                            value={newTask}
                                            onChange={(e) =>
                                                setNewTask(e.target.value)
                                            }
                                        />
                                        <button
                                            onClick={addTask}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                                        >
                                            Add
                                        </button>
                                    </div>

                                    <ul>
                                        {tasks.map((task, index) => (
                                            <li key={index} className="mb-2">
                                                {task}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-4">
                                        <button
                                            onClick={() => {
                                                togglePopup5();
                                                updateProgress();
                                            }}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Finish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
