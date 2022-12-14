import React, { useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({coins}) => {

    const [searchText, setSearchText] = useState('')
    // console.log(coins)
  return (
    <div className='rounded-div my-5'>
        <div className='flex flex-col md:flex-row justify-between pt-5 pb-5 text-center md:text-right'>
            <h1 className='text-2xl font-bold my-4'>Search Crypto</h1>
            <form>
                <input onChange={(e) => setSearchText(e.target.value)} className='w-full bg-primary border border-input px-4 py-3 rounded-3xl shadow-xl' type="text" placeholder='Search a coin' />
            </form>
        </div>

        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                    <th></th>
                    <th className='px-5'>#</th>
                    <th className='text-left'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden sm:table-cell'>Mkt</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                {coins
                .filter((value) => {
                    if (searchText === '') {
                        return value;
                    } else if (
                        value.name.toLowerCase().includes(searchText.toLowerCase())
                    ) {
                        return value;
                    }
                }).map((coin) => (
                   <CoinItem key={coin.id} coin={coin} />
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default CoinSearch;