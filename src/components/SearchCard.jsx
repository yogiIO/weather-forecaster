import { Input, Spin } from "antd";
import { useWeather } from "../api/weather";
import { useCallback, useState } from "react";
import styled from "styled-components";

const { Search } = Input;

const StyledSearchComponent = styled(Search)`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  input {
    background-color: transparent;
    color: #fff;
  }
  input:hover,
  input:focus {
    background-color: transparent;
  }
`;
export default function SearchCard() {
    const [cityName, setCityName] = useState("Dehradun");

    const onSearch = useCallback((val) =>{
        return setCityName(val);
    }, [])
    const { isPending, error, data } = useWeather(cityName);
    return (
        <div className="custom-container max-w-[80%] m-auto p-[24px] rounded-2xl bg-transparent backdrop-blur-[40px] gap-[12px] min-h-[500px] max-h-max">
            <div className=" text-[#fff] text-[24px] font-semibold text-center">
                Weather Forecaster
            </div>
            <StyledSearchComponent
                placeholder="Enter city name"
                onSearch={onSearch}
                enterButton
                size="large"
                defaultValue={cityName}
            />
            {isPending && (
                <Spin
                    size="large"
                    className="flex items-center justify-center flex-1"
                />
            )}
            {error && (
                <div className=" grid grid-cols-1 place-items-center text-[#fff] text-[16px] font-semibold flex-1">
                    {error?.message}
                </div>
            )}
            {data && !isPending && !error && (
                <div className=" grid grid-cols-2 text-[#fff] text-[16px] font-semiboldh-full">
                    <div className="flex items-center justify-start">City Name:</div>
                    <div className="flex items-center justify-start">{data.name}</div>
                    <div className="flex items-center justify-start">Temprature:</div>
                    <div className="flex items-center justify-start">
                        {data.main.temp}
                    </div>
                    <div className="flex items-center justify-start">Feels Like:</div>
                    <div className="flex items-center justify-start">
                        {data.main.feels_like}
                    </div>
                    <div className="flex items-center justify-start">Country:</div>
                    <div className="flex items-center justify-start">
                        {data.sys.country}
                    </div>
                    <div className="flex items-center justify-start">Weather:</div>
                    <div className="flex items-center justify-start">
                        {data.weather[0].main}
                    </div>
                    <div className="flex items-center justify-start">Description:</div>
                    <div className="flex items-center justify-start">
                        {data.weather[0].description}
                    </div>
                </div>
            )}
        </div>
    );
}
