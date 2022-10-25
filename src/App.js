import './App.css';

import { useState, useEffect } from 'react';
export default function App() {
    const [rubToRon, setRubToRon] = useState(0.31);
    const [eurToRon, setEurToRon] = useState(0.2);
    const [ronSum, setRonSum] = useState('');

    useEffect(() => {
        const currencyFetch = fetch(
            'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ron.json'
        )
            .then((response) => response.json())
            .then(
                (response) =>
                    setRubToRon(response.ron.rub) &
                    setEurToRon(response.ron.eur)
            );
    }, []);

    const handleRubToRon = (e) => {
        setRubToRon(e.target.value);
    };
    const handleRonToEur = (e) => {
        setEurToRon(e.target.value);
    };

    const handleRonSum = (e) => {
        setRonSum(e.target.value);
    };
    let dollarUSLocale = Intl.NumberFormat('en-US');
    return (
        <div className="App">
            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label
                            for="first_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            1 RUB = {rubToRon} lei
                        </label>
                        <input
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={rubToRon}
                            value={rubToRon}
                            onChange={handleRubToRon}
                        />
                    </div>
                    <div>
                        <label
                            for="last_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            1 EUR = {eurToRon} lei
                        </label>
                        <input
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={eurToRon}
                            value={eurToRon}
                            onChange={handleRonToEur}
                        />
                    </div>
                </div>
                <div class="mb-6">
                    <label
                        for="email"
                        class="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
                    >
                        {dollarUSLocale.format(ronSum)} lei
                    </label>
                    <label
                        for="email"
                        class="block mb-2 text-3xl font-medium text-gray-900 dark:text-gray-300"
                    >
                        {dollarUSLocale.format(ronSum * rubToRon)} рублей
                    </label>
                    <label
                        for="email"
                        class="block mb-2 text-3xl font-medium text-gray-900 dark:text-gray-300"
                    >
                        {dollarUSLocale.format(ronSum * eurToRon)} евро
                    </label>
                    <input
                        type="tel"
                        step="100"
                        value={ronSum}
                        onChange={handleRonSum}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="input sum in ron"
                    />
                </div>
            </form>
        </div>
    );
}
