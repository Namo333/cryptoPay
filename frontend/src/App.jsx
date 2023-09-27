import React from "react";
import { Btn } from "./components/Btn";
import { Tag } from "./components/tag";

const App = () => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] w-[1600px] h-[7265px] relative">
        <div className="absolute w-[1600px] h-[770px] top-[6495px] left-0">
          <div className="flex flex-col w-[1600px] items-start gap-[24px] pt-[120px] pb-[40px] px-[200px] absolute top-[498px] left-0 bg-dark-blue">
            <div className="flex w-[1200px] items-center justify-between relative flex-[0_0_auto]">
              <div className="relative w-[163px] h-[64px]">
                <img
                  className="absolute w-[64px] h-[64px] top-0 left-0 object-cover"
                  alt="Logo img"
                  src="https://c.animaapp.com/QqKxfkgd/img/logo-img-1@2x.png"
                />
              </div>
              <div className="flex items-center justify-center gap-[32px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] font-desktop-button font-[number:var(--desktop-button-font-weight)] text-white text-[length:var(--desktop-button-font-size)] text-center tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] whitespace-nowrap [font-style:var(--desktop-button-font-style)]">
                  Use cases
                </div>
                <div className="relative w-fit mt-[-1.00px] font-desktop-button font-[number:var(--desktop-button-font-weight)] text-white text-[length:var(--desktop-button-font-size)] text-center tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] whitespace-nowrap [font-style:var(--desktop-button-font-style)]">
                  Features
                </div>
                <div className="relative w-fit mt-[-1.00px] font-desktop-button font-[number:var(--desktop-button-font-weight)] text-white text-[length:var(--desktop-button-font-size)] text-center tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] whitespace-nowrap [font-style:var(--desktop-button-font-style)]">
                  How to start
                </div>
              </div>
              <Btn BG="dark" className="!flex-[0_0_auto]" size="large" state="default" type="secondary" />
            </div>
            <div className="relative w-[193px] font-desktop-button font-[number:var(--desktop-button-font-weight)] text-white text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
              ©2023 Crypto Bot
            </div>
          </div>
          <div className="flex flex-col w-[1600px] items-center justify-end gap-[40px] pt-[24px] pb-[80px] px-0 absolute top-0 left-0 bg-white rounded-[0px_0px_40px_40px]">
            <div className="inline-flex flex-col items-center justify-end gap-[24px] relative flex-[0_0_auto]">
              <div className="relative w-[992px] mt-[-1.00px] font-desktop-h2-header font-[number:var(--desktop-h2-header-font-weight)] text-dark text-[length:var(--desktop-h2-header-font-size)] text-center tracking-[var(--desktop-h2-header-letter-spacing)] leading-[var(--desktop-h2-header-line-height)] [font-style:var(--desktop-h2-header-font-style)]">
                Join dev community
              </div>
              <p className="relative w-[590px] font-[number:var(--desktop-base-text-font-weight)] text-dark-80 text-center font-desktop-base-text text-[length:var(--desktop-base-text-font-size)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] [font-style:var(--desktop-base-text-font-style)]">
                Connect with bot developers and explore the possibilities
                <br />
                our crypto payments service unlocks.
              </p>
            </div>
            <div className="flex w-[992px] items-start justify-center gap-[24px] relative flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-[16px] relative flex-1 grow bg-[#ffffff]">
                <div className="relative w-[96px] h-[96px] rounded-[900px] overflow-hidden shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(131,205,41)_0%,rgb(116,190,26)_100%)]">
                  {/* <LogosNodejsOriginal1
                    className="!absolute !w-[80px] !h-[80px] !top-[8px] !left-[8px]"
                    color="white"
                  /> */}
                </div>
                <div className="relative self-stretch font-[number:var(--desktop-button-font-weight)] text-dark-80 text-center font-desktop-button text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
                  crypto-pay-api
                </div>
              </div>
              <div className="flex flex-col items-center gap-[16px] relative flex-1 grow bg-[#ffffff]">
                <img
                  className="relative w-[112px] h-[104px]"
                  alt="Net"
                  src="https://c.animaapp.com/QqKxfkgd/img/net.svg"
                />
                <div className="relative self-stretch font-[number:var(--desktop-button-font-weight)] text-dark-80 text-center font-desktop-button text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
                  CryptoPay
                </div>
              </div>
              <div className="flex flex-col items-center gap-[16px] relative flex-1 grow bg-[#ffffff]">
                <img
                  className="relative w-[112px] h-[104px]"
                  alt="Php"
                  src="https://c.animaapp.com/QqKxfkgd/img/php.svg"
                />
                <div className="relative self-stretch font-[number:var(--desktop-button-font-weight)] text-dark-80 text-center font-desktop-button text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
                  crypto-pay-api
                </div>
              </div>
              <div className="flex flex-col items-center gap-[16px] relative flex-1 grow bg-[#ffffff]">
                <div className="relative w-[96px] h-[96px] rounded-[900px] overflow-hidden shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(36,36,41)_0%,rgb(24,24,29)_100%)]">
                  {/* <LogosPythonOriginal1 className="!absolute !w-[74px] !h-[74px] !top-[11px] !left-[11px]" /> */}
                </div>
                <div className="relative self-stretch font-[number:var(--desktop-button-font-weight)] text-dark-80 text-center font-desktop-button text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
                  aiocryptopay
                </div>
              </div>
              <div className="flex flex-col items-center gap-[16px] relative flex-1 grow bg-[#ffffff]">
                <img
                  className="relative w-[112px] h-[104px]"
                  alt="Go"
                  src="https://c.animaapp.com/QqKxfkgd/img/go.svg"
                />
                <div className="relative self-stretch font-[number:var(--desktop-button-font-weight)] text-dark-80 text-center font-desktop-button text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
                  cryptobot-sdk-golang
                </div>
              </div>
            </div>
            <Btn
              BG="light"
              className="!flex-[0_0_auto]"
              size="large"
              state="default"
              text="Open Devs chat"
              type="general"
            />
          </div>
        </div>
        <div className="absolute w-[1600px] h-[1695px] top-[2004px] left-0">
          <div className="flex flex-col w-[488px] h-[366px] items-center justify-center gap-[16px] px-[56px] py-[42px] absolute top-[389px] left-[200px] bg-bg-light rounded-[40px] overflow-hidden">
            <div className="relative flex-1 self-stretch w-full grow">
              <div className="relative w-[234px] h-[85px] top-[37px] left-[76px]">
                <div className="absolute w-[223px] h-[62px] top-0 left-0">
                  <div className="inline-flex items-center justify-center gap-[5px] px-[39px] py-[18px] relative top-[-8px] left-[-8px] rounded-[17px] overflow-hidden [background:linear-gradient(180deg,rgba(41,126,226,0.12)_0%,rgba(24.22,96.57,181.69,0.12)_100%)]">
                    <img
                      className="relative w-[21px] h-[21px] object-cover"
                      alt="Tree"
                      src="https://c.animaapp.com/QqKxfkgd/img/tree-1@2x.png"
                    />
                    <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-dark text-[22px] text-center tracking-[0] leading-[26.4px] whitespace-nowrap">
                      Create App
                    </div>
                  </div>
                </div>
                <img
                  className="absolute w-[42px] h-[46px] top-[39px] left-[192px]"
                  alt="Polygon"
                  src="https://c.animaapp.com/QqKxfkgd/img/polygon-2.svg"
                />
              </div>
            </div>
            <div className="flex items-center justify-center self-stretch w-full flex-[0_0_auto] flex-col gap-[20px] relative">
              <div className="relative self-stretch mt-[-1.00px] font-desktop-h3-header font-[number:var(--desktop-h3-header-font-weight)] text-dark text-[length:var(--desktop-h3-header-font-size)] tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] [font-style:var(--desktop-h3-header-font-style)]">
                One click to start
              </div>
              <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  Open{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  @CryptoBot
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  , go to{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  Crypto Pay
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  {" "}
                  and tap Create App to get API Token
                </span>
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[42px] px-[56px] py-[42px] absolute top-[24px] left-[200px] bg-bg-light rounded-[40px] overflow-hidden">
            <div className="inline-flex items-start flex-[0_0_auto] flex-col gap-[20px] relative">
              <p className="relative w-[1088px] mt-[-1.00px] font-desktop-h3-header font-[number:var(--desktop-h3-header-font-weight)] text-dark text-[length:var(--desktop-h3-header-font-size)] tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] [font-style:var(--desktop-h3-header-font-style)]">
                Accept a wide range of cryptocurrencies
              </p>
              <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  Bill any supported cryptocurrencies with{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#111111cc] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  asset
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  {" "}
                  parameter in{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  GetInvoice
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  {" "}
                  method
                </span>
              </p>
            </div>
            <div className="flex w-[1088px] items-start justify-between relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[112px] h-[112px] mt-[-8.00px] ml-[-8.00px] mr-[-8.00px]"
                  alt="Eth"
                  src="https://c.animaapp.com/QqKxfkgd/img/eth.svg"
                />
                <Tag className="!flex-[0_0_auto]" divClassName="!text-dark-40" state="default" />
              </div>
              <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[112px] h-[112px] mt-[-8.00px] ml-[-8.00px] mr-[-8.00px]"
                  alt="Usdt"
                  src="https://c.animaapp.com/QqKxfkgd/img/usdt.svg"
                />
                <Tag className="!flex-[0_0_auto]" divClassName="!text-dark-40" state="default" text="USDT" />
              </div>
              <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[112px] h-[112px] mt-[-8.00px] ml-[-8.00px] mr-[-8.00px]"
                  alt="Ton"
                  src="https://c.animaapp.com/QqKxfkgd/img/ton-1.svg"
                />
                <Tag className="!flex-[0_0_auto]" divClassName="!text-dark-40" state="default" text="TON" />
              </div>
              <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[112px] h-[112px] mt-[-8.00px] ml-[-8.00px] mr-[-8.00px]"
                  alt="Btc"
                  src="https://c.animaapp.com/QqKxfkgd/img/btc.svg"
                />
                <Tag className="!flex-[0_0_auto]" divClassName="!text-dark-40" state="default" text="BTC" />
              </div>
              <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                <div className="relative w-[96px] h-[96px] rounded-[900px] overflow-hidden shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(252,7,12)_0%,rgb(244,92,67)_100%)]">
                  <div className="relative w-[56px] h-[59px] top-[22px] left-[20px] bg-[url(https://c.animaapp.com/QqKxfkgd/img/tron--trx-.svg)] bg-[100%_100%]" />
                </div>
                <Tag className="!flex-[0_0_auto]" divClassName="!text-dark-40" state="default" text="TRX" />
              </div>
              <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[96px] h-[96px]"
                  alt="Ltc"
                  src="https://c.animaapp.com/QqKxfkgd/img/ltc.svg"
                />
                <Tag className="!flex-[0_0_auto]" divClassName="!text-dark-40" state="default" text="LTC" />
              </div>
              <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                <div className="relative w-[96px] h-[96px] rounded-[900px] overflow-hidden shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(39,117,202)_0%,rgb(0,187,249)_100%)]">
                  <div className="relative w-[74px] h-[71px] top-[13px] left-[11px]">
                    <div className="relative h-[71px]">
                      <img
                        className="absolute w-[27px] h-[49px] top-[11px] left-[23px]"
                        alt="Usd coin USDC"
                        src="https://c.animaapp.com/QqKxfkgd/img/usd-coin--usdc--1.svg"
                      />
                      <img
                        className="absolute w-[74px] h-[71px] top-0 left-0"
                        alt="Usd coin USDC"
                        src="https://c.animaapp.com/QqKxfkgd/img/usd-coin--usdc-.svg"
                      />
                    </div>
                  </div>
                </div>
                <Tag className="!flex-[0_0_auto]" divClassName="!text-dark-40" state="default" text="USDC" />
              </div>
              <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[96px] h-[96px]"
                  alt="Bnb"
                  src="https://c.animaapp.com/QqKxfkgd/img/bnb.svg"
                />
                <Tag className="!flex-[0_0_auto]" divClassName="!text-dark-40" state="default" text="BNB" />
              </div>
            </div>
          </div>
          <div className="w-[488px] h-[366px] gap-[16px] top-[775px] left-[200px] flex flex-col items-start justify-end px-[56px] py-[42px] absolute bg-bg-light rounded-[32px]">
            <div className="flex flex-col items-center justify-center gap-[10px] relative flex-1 self-stretch w-full grow">
              <div className="relative w-[276px] h-[96px]">
                <div className="relative h-[96px]">
                  <div className="inline-flex items-start absolute top-0 left-0">
                    <div className="relative w-[104px] h-[104px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] rounded-[900px] border-4 border-solid border-slate-100 shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(141,218,213)_0%,rgb(27,162,122)_100%)]" />
                    <div className="relative w-[104px] h-[104px] mt-[-4.00px] mb-[-4.00px] ml-[-62px] rounded-[900px] border-4 border-solid border-slate-100 shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(255,147,15)_0%,rgb(250.75,195.74,16.72)_100%)]" />
                    <img
                      className="relative w-[120px] h-[120px] mt-[-12.00px] mb-[-12.00px] mr-[-12.00px] ml-[-62px]"
                      alt="Ton"
                      src="https://c.animaapp.com/QqKxfkgd/img/ton.svg"
                    />
                  </div>
                  <div className="absolute w-[96px] h-[96px] top-0 left-[180px] rounded-[900px] overflow-hidden shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(1,4,23)_0%,rgb(43,51,63)_100%)]">
                    <div className="absolute h-[62px] top-[15px] left-[29px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-[56px] text-center tracking-[-1.68px] leading-[61.6px] whitespace-nowrap">
                      $
                    </div>
                  </div>
                  <img
                    className="absolute w-[43px] h-[26px] top-[35px] left-[150px]"
                    alt="Btn"
                    src="https://c.animaapp.com/QqKxfkgd/img/btn.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[376px] items-center justify-center gap-[20px] relative flex-[0_0_auto]">
              <div className="mt-[-1.00px] relative self-stretch font-desktop-h3-header font-[number:var(--desktop-h3-header-font-weight)] text-dark text-[length:var(--desktop-h3-header-font-size)] tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] [font-style:var(--desktop-h3-header-font-style)]">
                Real-time
                <br />
                exchange rates
              </div>
              <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  Request up to date currency rate with the{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  getExchangeRates{" "}
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  API method
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[488px] h-[510px] items-center justify-end gap-[20px] p-[42px] absolute top-[1161px] left-[912px] bg-bg-light rounded-[32px]">
            <div className="relative flex-1 self-stretch w-full grow rounded-[24px] overflow-hidden">
              <div className="relative w-[654px] h-[309px] top-[-51px] left-[-125px] rounded-[32px] [background:linear-gradient(180deg,rgb(159,204,250)_0%,rgb(9,116,241)_100%)]">
                <div className="inline-flex items-end relative top-[99px] left-[146px] shadow-[0px_0.9px_37.67px_#2423612e]">
                  <div className="relative w-[21.37px] h-[14.96px]">
                    <img
                      className="absolute w-[21px] h-[23px] top-[-8px] left-0"
                      alt="Tail"
                      src="https://c.animaapp.com/QqKxfkgd/img/tail-1.svg"
                    />
                  </div>
                  <div className="flex flex-col w-[356.85px] items-start px-[14.96px] py-[10px] relative ml-[-16.03px] bg-[#ffffff] rounded-[16.03px]">
                    <div className="relative self-stretch w-full h-[106.84px]">
                      <div className="relative w-[327px] h-[107px] -top-px">
                        <p className="absolute w-[327px] top-0 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[18.2px] tracking-[-0.53px] leading-[21.4px]">
                          <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[18.2px] tracking-[-0.53px] leading-[21.4px]">
                            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                          </span>
                          <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold">Anonymous</span>
                          <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[18.2px] tracking-[-0.53px] leading-[21.4px]">
                            {" "}
                            paid your invoice #IV53. You received{" "}
                          </span>
                          <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold">
                            3442 TON ($5000).
                            <br />
                          </span>
                          <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[18.2px] tracking-[-0.53px] leading-[21.4px]">
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; A generous donation! Keep working hard
                          </span>
                        </p>
                        <img
                          className="absolute w-[18px] h-[18px] top-[88px] left-[41px] object-cover"
                          alt="Hard"
                          src="https://c.animaapp.com/QqKxfkgd/img/hard@2x.png"
                        />
                        <img
                          className="absolute w-[18px] h-[18px] top-[67px] left-0 object-cover"
                          alt="Speech balloon"
                          src="https://c.animaapp.com/QqKxfkgd/img/speech-balloon@2x.png"
                        />
                        <img
                          className="absolute w-[18px] h-[18px] top-[2px] left-0 object-cover"
                          alt="Tree"
                          src="https://c.animaapp.com/QqKxfkgd/img/tree@2x.png"
                        />
                      </div>
                    </div>
                    <div className="relative self-stretch mt-[-20.27px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-dark-40 text-[13.9px] text-right tracking-[-0.53px] leading-[19.2px]">
                      21:25
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[376px] items-center justify-center gap-[20px] relative flex-[0_0_auto]">
              <div className="mt-[-1.00px] relative self-stretch font-desktop-h3-header font-[number:var(--desktop-h3-header-font-weight)] text-dark text-[length:var(--desktop-h3-header-font-size)] tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] [font-style:var(--desktop-h3-header-font-style)]">
                Anonymous payments
              </div>
              <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  Use{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#111111cc] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  allow_anonymous
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  {" "}
                  parameter in{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  createInvoice
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  {" "}
                  method to give user an option to remain private
                </span>
              </p>
            </div>
          </div>
          <div className="w-[692px] h-[748px] gap-[24px] top-[389px] left-[708px] flex flex-col items-start justify-end px-[56px] py-[42px] absolute bg-bg-light rounded-[32px]">
            <div className="bg-[url(https://c.animaapp.com/QqKxfkgd/img/bg.svg)] bg-[100%_100%] relative flex-1 self-stretch w-full grow rounded-[24px] overflow-hidden">
              <div className="inline-flex flex-col items-start gap-[4.47px] relative top-[47px] left-[74px] shadow-[0px_2.82px_30.05px_#62392a1f]">
                <div className="flex flex-col w-[431px] items-start px-[15.66px] py-[10px] relative flex-[0_0_auto] bg-[#ffffff] rounded-[16.78px_16.78px_7.83px_7.83px]">
                  <p className="relative w-fit mt-[-0.95px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-transparent text-[19px] tracking-[-0.56px] leading-[22.4px]">
                    <span className="text-black">Application Statistics </span>
                    <span className="text-[#0d0d12]">@GoodsBot</span>
                    <span className="text-black"> for </span>
                    <span className="text-black">
                      all time:
                      <br />
                    </span>
                    <span className="text-black">
                      <br />
                      Volume:{" "}
                    </span>
                    <span className="text-black">
                      $6,530
                      <br />
                    </span>
                    <span className="text-black">
                      <br />
                      The number of created invoices:{" "}
                    </span>
                    <span className="text-black">
                      15,569
                      <br />
                    </span>
                    <span className="text-black">Number of payments: </span>
                    <span className="text-black">
                      6,453
                      <br />
                    </span>
                    <span className="text-black">Number of users: </span>
                    <span className="text-black">
                      5,606
                      <br />
                    </span>
                    <span className="text-black">
                      <br />
                      Conversion:{" "}
                    </span>
                    <span className="text-black">41%</span>
                  </p>
                  <div className="relative self-stretch mt-[-21px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-dark-40 text-[14.5px] text-right tracking-[-0.56px] leading-[20.1px]">
                    21:30
                  </div>
                </div>
                <div className="inline-flex items-start gap-[4.69px] relative flex-[0_0_auto]">
                  <div className="flex flex-col w-[213.15px] items-center justify-center gap-[9.39px] px-0 py-[15.02px] relative bg-[#3688c2d1] rounded-[7.83px]">
                    <div className="relative w-fit mt-[-0.95px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff] text-[19px] tracking-[0] leading-[17.9px] whitespace-nowrap">
                      · All Time ·
                    </div>
                  </div>
                  <div className="flex flex-col w-[213.15px] items-center justify-center gap-[9.39px] px-0 py-[15.02px] relative bg-[#3688c2d1] rounded-[7.83px]">
                    <div className="relative w-fit mt-[-0.95px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff] text-[19px] tracking-[0] leading-[17.9px] whitespace-nowrap">
                      Today
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start gap-[4.69px] relative flex-[0_0_auto]">
                  <div className="flex flex-col w-[213.15px] items-center justify-center gap-[9.39px] px-0 py-[15.02px] relative bg-[#3688c2d1] rounded-[7.83px]">
                    <div className="relative w-fit mt-[-0.95px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff] text-[19px] tracking-[0] leading-[17.9px] whitespace-nowrap">
                      Yesterday
                    </div>
                  </div>
                  <div className="flex flex-col w-[213.15px] items-center justify-center gap-[9.39px] px-0 py-[15.02px] relative bg-[#3688c2d1] rounded-[7.83px]">
                    <div className="relative w-fit mt-[-0.95px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff] text-[19px] tracking-[0] leading-[17.9px] whitespace-nowrap">
                      Week
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[9.39px] px-0 py-[15.02px] relative self-stretch w-full flex-[0_0_auto] bg-[#3688c2d1] rounded-[7.83px]">
                  <div className="relative w-fit mt-[-0.95px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff] text-[19px] tracking-[0] leading-[17.9px] whitespace-nowrap">
                    Month
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[9.39px] px-0 py-[15.02px] relative self-stretch w-full flex-[0_0_auto] bg-[#3688c2d1] rounded-[7.83px_7.83px_16.78px_16.78px]">
                  <img
                    className="relative w-[6.57px] h-[10.33px]"
                    alt="Vector"
                    src="https://c.animaapp.com/QqKxfkgd/img/vector-633.svg"
                  />
                  <div className="relative w-fit mt-[-0.95px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff] text-[19px] tracking-[0] leading-[17.9px] whitespace-nowrap">
                    Back
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end self-stretch w-full flex-[0_0_auto] flex-col gap-[20px] relative">
              <div className="relative self-stretch mt-[-1.00px] font-desktop-h3-header font-[number:var(--desktop-h3-header-font-weight)] text-dark text-[length:var(--desktop-h3-header-font-size)] tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] [font-style:var(--desktop-h3-header-font-style)]">
                Payment statistics
              </div>
              <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  Open{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  @CryptoBot
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  , go to{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  Crypto Pay{" "}
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  and{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  My Apps
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  ,
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  {"  "}
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  App Name to get Statistics
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[692px] h-[510px] items-center gap-[20px] pt-0 pb-[42px] px-[42px] absolute top-[1161px] left-[200px] bg-bg-light rounded-[40px] overflow-hidden">
            <div className="flex flex-col items-center justify-end gap-[10px] px-[46px] py-0 relative flex-1 self-stretch w-full grow rounded-[24px] overflow-hidden">
              <div className="relative w-[474px] h-[975.91px] mt-[-617.91px] shadow-[0px_5.63px_56.3px_#0000001a]">
                <div className="relative w-[469px] h-[969px] left-[2px]">
                  <div className="absolute w-[462px] h-[969px] top-0 left-[4px]">
                    <div className="relative h-[969px] rounded-[71.98px]">
                      <div className="absolute w-[459px] h-[968px] top-px left-px bg-black rounded-[69.29px] border-[5.44px] border-solid border-[#989892] shadow-[inset_0px_0px_0.42px_5.86px_#3f3f3f]" />
                      <div className="absolute w-[462px] h-[969px] top-0 left-0 bg-[#00000000] rounded-[71.98px] border-[0.84px] border-solid border-[#1b1c16] shadow-[inset_0px_0px_0.42px_2.09px_#77796b]" />
                      <img
                        className="absolute w-[459px] h-[351px] top-[618px] left-px"
                        alt="Stroke body"
                        src="https://c.animaapp.com/QqKxfkgd/img/stroke-body-1.svg"
                      />
                      <img
                        className="absolute w-[428px] h-[334px] top-[618px] left-[18px]"
                        alt="Screen"
                        src="https://c.animaapp.com/QqKxfkgd/img/screen-1.png"
                      />
                    </div>
                  </div>
                  <div className="absolute w-[462px] h-[969px] top-0 left-[4px]">
                    <div className="absolute w-[6px] h-[7px] top-[963px] left-[92px] bg-[#9aa8b180]" />
                    <div className="h-[5px] top-[873px] bg-[#9aa8b180] absolute w-[7px] left-0" />
                    <div className="h-[8px] top-[98px] bg-[#e4e4e3a6] absolute w-[7px] left-0" />
                    <div className="absolute w-[7px] h-[6px] top-[872px] left-[455px] bg-[#9aa8b180]" />
                    <div className="absolute w-[7px] h-[8px] top-[99px] left-[455px] bg-[#e4e4e3a6]" />
                    <div className="absolute w-[7px] h-[6px] top-0 left-[364px] bg-[#e4e4e3a6]" />
                  </div>
                  <div className="absolute w-[68px] h-[6px] top-[9px] left-[201px] bg-[#141414] rounded-[12.12px] border-[0.4px] border-solid border-[#0d0d0d] shadow-[inset_0px_0px_2.02px_0.4px_#000000,inset_1.21px_0px_0px_#2a2a2a,inset_-1.21px_0px_0px_#2a2a2a]" />
                  <div className="absolute w-[469px] h-[241px] top-[193px] left-0">
                    <div className="absolute w-[5px] h-[76px] top-[165px] left-0 bg-[#c8c9c4] rounded-[1.69px] border-[0.63px] border-solid border-transparent shadow-[inset_2.11px_0px_0px_#dadbd6,inset_2.11px_0px_1.69px_#dadbd6a8,inset_1.26px_0px_0px_#41423c,inset_-1.26px_-3.37px_0.84px_#41423c,inset_-1.26px_3.37px_0.84px_#41423c,inset_0px_1.26px_0px_#f2f3ed,inset_0px_-1.26px_0px_#f2f3ed] [border-image:linear-gradient(to_bottom,rgb(125,126,121),rgb(27,28,22)_25%,rgb(67,68,62)_50%,rgb(126,129,122)_68.23%,rgb(131,132,127)_93.73%)_1]" />
                    <div className="w-[5px] h-[77px] top-[72px] rounded-[1.55px] border-[0.31px] border-solid shadow-[inset_0.39px_0px_0px_#dadbd6,inset_-1.16px_-3.1px_1.16px_#dadbd633,inset_0px_3.1px_0.39px_#41423c4c,inset_-1.55px_0px_1.55px_#41423c,inset_0px_1.55px_0px_#41423c,inset_0px_-1.55px_0.78px_#f2f3ed,inset_-0.78px_0px_0px_#f2f3ed] [border-image:linear-gradient(to_bottom,rgb(125,126,121),rgb(27,28,22)_29.17%,rgb(67,68,62)_50%,rgb(126,129,122)_77.6%,rgb(131,132,127)_100%)_1] absolute left-0 bg-[#c8c9c4] border-transparent" />
                    <div className="absolute w-[5px] h-[41px] top-0 left-0 bg-[#c8c9c4] rounded-[1.55px] border-[0.31px] border-solid border-transparent shadow-[inset_0.39px_0px_0px_#dadbd6,inset_-1.16px_-3.1px_1.16px_#dadbd633,inset_0px_3.1px_0.39px_#41423c4c,inset_-1.55px_0px_1.55px_#41423c,inset_0px_1.55px_0px_#41423c,inset_0px_-1.55px_0.78px_#f2f3ed,inset_-0.78px_0px_0px_#f2f3ed] [border-image:linear-gradient(to_bottom,rgb(125,126,121),rgb(27,28,22)_29.17%,rgb(67,68,62)_50%,rgb(126,129,122)_75.52%,rgb(131,132,127)_100%)_1]" />
                    <div className="absolute w-[3px] h-[116px] top-[98px] left-[466px] bg-[#c8c9c4] rounded-[1.69px] border-[0.31px] border-solid border-transparent shadow-[inset_-1.69px_0px_0px_#dadbd6,inset_1.69px_-3.37px_0.84px_#dadbd6,inset_1.69px_3.37px_0.84px_#41423c,inset_-1.26px_0px_1.69px_#41423ca8,inset_0px_1.69px_0px_#f2f3ed,inset_0px_-1.69px_0px_#f2f3ed] [border-image:linear-gradient(to_bottom,rgb(125,126,121),rgb(27,28,22)_23.44%,rgb(67,68,62)_55.73%,rgb(126,129,122)_76.04%,rgb(131,132,127)_93.23%)_1]" />
                  </div>
                  <div className="absolute w-[114px] h-[32px] top-[33px] left-[178px] bg-[#090909] rounded-[15.08px]">
                    <div className="absolute w-[32px] h-[32px] top-0 left-[83px] bg-[#090909] rounded-[15.89px]">
                      <div className="relative w-[18px] h-[19px] top-[7px] left-[7px] rounded-[9.1px/9.26px] border-[0.57px] border-solid border-[#080f20] [background:conic-gradient(from_180deg_at_50%_50%,rgb(0,0,0)_0deg,rgba(0,0,0,0)_60deg,rgba(0,0,0,0)_318.75deg)] opacity-70" />
                    </div>
                    <img
                      className="absolute w-[17px] h-px top-[1499px] left-[7357px]"
                      alt="Line"
                      src="https://c.animaapp.com/QqKxfkgd/img/line-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[580px] items-center justify-center flex-[0_0_auto] flex-col gap-[20px] relative">
              <div className="mt-[-1.00px] relative self-stretch font-desktop-h3-header font-[number:var(--desktop-h3-header-font-weight)] text-dark text-[length:var(--desktop-h3-header-font-size)] tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] [font-style:var(--desktop-h3-header-font-style)]">
                Send coins to users
              </div>
              <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  Automate payouts to users with{" "}
                </span>
                <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                  transfer
                </span>
                <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                  {" "}
                  API method
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-[1600px] h-[880px] top-[1004px] left-0 bg-dark-blue">
          <p className="absolute w-[488px] top-[256px] left-[810px] font-desktop-h2-header font-[number:var(--desktop-h2-header-font-weight)] text-transparent text-[length:var(--desktop-h2-header-font-size)] tracking-[var(--desktop-h2-header-letter-spacing)] leading-[var(--desktop-h2-header-line-height)] [font-style:var(--desktop-h2-header-font-style)]">
            <span className="text-[#41a4df] font-desktop-h2-header [font-style:var(--desktop-h2-header-font-style)] font-[number:var(--desktop-h2-header-font-weight)] tracking-[var(--desktop-h2-header-letter-spacing)] leading-[var(--desktop-h2-header-line-height)] text-[length:var(--desktop-h2-header-font-size)]">
              Instant Auto Sales:
            </span>
            <span className="text-[#ffffff] font-desktop-h2-header [font-style:var(--desktop-h2-header-font-style)] font-[number:var(--desktop-h2-header-font-weight)] tracking-[var(--desktop-h2-header-letter-spacing)] leading-[var(--desktop-h2-header-line-height)] text-[length:var(--desktop-h2-header-font-size)]">
              {"  "}Boost conversion
            </span>
          </p>
          <p className="absolute w-[488px] top-[474px] left-[810px] font-[number:var(--desktop-base-text-font-weight)] text-white font-desktop-base-text text-[length:var(--desktop-base-text-font-size)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] [font-style:var(--desktop-base-text-font-style)]">
            Immediately deliver digital products
            <br />
            and services to your users.
          </p>
          <Btn
            BG="light"
            className="!absolute !left-[810px] !top-[555px]"
            divClassName="!tracking-[var(--mobile-button-letter-spacing)] !text-[length:var(--mobile-button-font-size)] ![font-style:var(--mobile-button-font-style)] !font-[number:var(--mobile-button-font-weight)] !font-mobile-button !leading-[var(--mobile-button-line-height)]"
            size="large"
            state="default"
            text="Open API Docs"
            type="general"
          />
          <div className="inline-flex flex-col h-[408px] items-center gap-[12px] absolute top-[236px] left-[1381px]">
            <div className="relative w-fit mt-[-1.00px] font-desktop-description font-[number:var(--desktop-description-font-weight)] text-[#ffffff] text-[length:var(--desktop-description-font-size)] tracking-[var(--desktop-description-letter-spacing)] leading-[var(--desktop-description-line-height)] whitespace-nowrap [font-style:var(--desktop-description-font-style)]">
              01
            </div>
            <div className="relative flex-1 w-[4px] grow bg-[#41a4df] rounded-[90px]" />
            <div className="relative flex-1 w-[4px] grow bg-white-24 rounded-[90px]" />
            <div className="relative flex-1 w-[4px] grow bg-white-24 rounded-[90px]" />
            <div className="relative w-fit font-[number:var(--desktop-description-font-weight)] text-[length:var(--desktop-description-font-size)] tracking-[var(--desktop-description-letter-spacing)] leading-[var(--desktop-description-line-height)] font-desktop-description text-[#ffffff] whitespace-nowrap [font-style:var(--desktop-description-font-style)]">
              03
            </div>
          </div>
          <div className="absolute w-[488px] h-[488px] top-[196px] left-[200px] rounded-[40px] [background:linear-gradient(180deg,rgb(250,172,168)_0%,rgb(221,214,243)_100%)]">
            <div className="inline-flex flex-col items-end gap-[4.76px] relative top-[136px] left-[41px] shadow-[0px_1px_32px_#38252829]">
              <div className="flex w-[399.04px] items-end relative flex-[0_0_auto]">
                <div className="flex-1 grow flex flex-col items-start px-[16.68px] py-[10px] relative bg-[#ffffff] rounded-[17.87px]">
                  <div className="relative w-[314.47px] h-[119.12px]">
                    <div className="relative w-[314px] h-[120px] -top-px -left-px">
                      <p className="absolute w-[314px] top-0 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-dark text-[20.3px] tracking-[-0.60px] leading-[23.8px]">
                        <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#0d0d12] text-[20.3px] tracking-[-0.60px] leading-[23.8px]">
                          &nbsp;&nbsp;&nbsp;&nbsp; You sent 5,5 USDT ($5.50).
                          <br />
                          <br />
                        </span>
                        <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold">Recipient:</span>
                        <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#0d0d12] text-[20.3px] tracking-[-0.60px] leading-[23.8px]">
                          {" "}
                          GoodsBot
                          <br />
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp; 1 month of Blazing Fast VPN
                        </span>
                      </p>
                      <img
                        className="absolute w-[20px] h-[20px] top-[96px] left-[273px] object-cover"
                        alt="Flash"
                        src="https://c.animaapp.com/QqKxfkgd/img/flash@2x.png"
                      />
                      <img
                        className="absolute w-[20px] h-[20px] top-[95px] left-px object-cover"
                        alt="Receipt"
                        src="https://c.animaapp.com/QqKxfkgd/img/receipt@2x.png"
                      />
                      <img
                        className="absolute w-[20px] h-[20px] top-px left-px object-cover"
                        alt="Money"
                        src="https://c.animaapp.com/QqKxfkgd/img/money@2x.png"
                      />
                    </div>
                  </div>
                  <div className="relative self-stretch mt-[-22px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-dark-40 text-[15.5px] text-right tracking-[-0.60px] leading-[21.4px]">
                    21:25
                  </div>
                </div>
              </div>
              <div className="inline-flex items-end relative flex-[0_0_auto]">
                <div className="relative w-[23.82px] h-[16.68px]">
                  <img
                    className="absolute w-[24px] h-[26px] top-[-9px] left-0"
                    alt="Tail"
                    src="https://c.animaapp.com/QqKxfkgd/img/tail.svg"
                  />
                </div>
                <div className="w-[399.04px] ml-[-17.87px] flex flex-col items-start px-[16.68px] py-[10px] relative bg-[#ffffff] rounded-[17.87px]">
                  <div className="relative w-[362.12px] h-[47.65px]">
                    <div className="relative w-[362px] h-[48px] -top-px">
                      <div className="absolute w-[362px] top-0 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-dark text-[20.3px] tracking-[-0.60px] leading-[23.8px]">
                        &nbsp;&nbsp;&nbsp;&nbsp; Access key: VPN-X3Y7-Z1W9-R6T2-Q4V8
                      </div>
                      <img
                        className="absolute w-[20px] h-[20px] top-[4px] left-0 object-cover"
                        alt="Key"
                        src="https://c.animaapp.com/QqKxfkgd/img/key@2x.png"
                      />
                    </div>
                  </div>
                  <div className="relative self-stretch mt-[-17px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-dark-40 text-[15.5px] text-right tracking-[-0.60px] leading-[21.4px]">
                    21:25
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1600px] h-[740px] top-[144px] left-0">
          <div className="flex flex-col w-[692px] items-start gap-[56px] absolute top-[100px] left-[200px]">
            <div className="flex flex-col items-start gap-[32px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-end justify-end relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-desktop-h1-header font-[number:var(--desktop-h1-header-font-weight)] text-transparent text-[length:var(--desktop-h1-header-font-size)] tracking-[var(--desktop-h1-header-letter-spacing)] leading-[var(--desktop-h1-header-line-height)] [font-style:var(--desktop-h1-header-font-style)]">
                  <span className="text-[#0d0d12] font-desktop-h1-header [font-style:var(--desktop-h1-header-font-style)] font-[number:var(--desktop-h1-header-font-weight)] tracking-[var(--desktop-h1-header-letter-spacing)] leading-[var(--desktop-h1-header-line-height)] text-[length:var(--desktop-h1-header-font-size)]">
                    Crypto payments for{" "}
                  </span>
                  <span className="text-[#41a4df] font-desktop-h1-header [font-style:var(--desktop-h1-header-font-style)] font-[number:var(--desktop-h1-header-font-weight)] tracking-[var(--desktop-h1-header-letter-spacing)] leading-[var(--desktop-h1-header-line-height)] text-[length:var(--desktop-h1-header-font-size)]">
                    telegram bots
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-start gap-[32px] relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-desktop-base-text font-[number:var(--desktop-base-text-font-weight)] text-dark text-[length:var(--desktop-base-text-font-size)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] [font-style:var(--desktop-base-text-font-style)]">
                  Seamlessly accept crypto payments
                  <br />
                  in your Telegram bots and services.
                </p>
                <Btn
                  BG="light"
                  className="!flex-[0_0_auto]"
                  divClassName="!tracking-[0] !text-[20px] ![font-style:unset] !font-bold ![font-family:'Inter',Helvetica] !leading-[24.0px]"
                  size="large"
                  state="default"
                  text="Get started"
                  type="general"
                />
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <div className="inline-flex items-start justify-center relative flex-[0_0_auto]">
                <img
                  className="relative w-[96px] h-[96px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/QqKxfkgd/img/ellipse-2.svg"
                />
                <img
                  className="relative w-[96px] h-[96px] ml-[-32px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/QqKxfkgd/img/ellipse-1.svg"
                />
                <img
                  className="relative w-[96px] h-[96px] ml-[-32px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/QqKxfkgd/img/ellipse-4.svg"
                />
                <img
                  className="relative w-[96px] h-[96px] ml-[-32px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/QqKxfkgd/img/ellipse-5.svg"
                />
                <img
                  className="relative w-[96px] h-[96px] ml-[-32px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/QqKxfkgd/img/ellipse-3.svg"
                />
              </div>
              <p className="relative w-[395px] font-[number:var(--desktop-base-text-font-weight)] text-dark font-desktop-base-text text-[length:var(--desktop-base-text-font-size)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] [font-style:var(--desktop-base-text-font-style)]">
                Popular bots use Crypto Pay
              </p>
            </div>
          </div>
          <div className="absolute w-[488px] h-[700px] top-[20px] left-[912px]">
            <div className="relative w-[337px] h-[693px] top-[3px] left-[76px] shadow-[0px_4px_40px_#0000001a]">
              <div className="relative w-[333px] h-[689px] left-[2px]">
                <div className="absolute w-[328px] h-[689px] top-0 left-[3px]">
                  <div className="relative h-[689px] rounded-[51.13px]">
                    <div className="absolute w-[326px] h-[687px] top-px left-px bg-black rounded-[49.22px] border-[3.86px] border-solid border-[#989892] shadow-[inset_0px_0px_0.3px_4.16px_#3f3f3f]" />
                    <div className="absolute w-[328px] h-[689px] top-0 left-0 bg-[#00000000] rounded-[51.13px] border-[0.59px] border-solid border-[#1b1c16] shadow-[inset_0px_0px_0.3px_1.49px_#77796b]" />
                    <img
                      className="absolute w-[326px] h-[687px] top-px left-px"
                      alt="Stroke body"
                      src="https://c.animaapp.com/QqKxfkgd/img/stroke-body.svg"
                    />
                    <img
                      className="absolute w-[304px] h-[663px] top-[13px] left-[13px]"
                      alt="Screen"
                      src="https://c.animaapp.com/QqKxfkgd/img/screen.png"
                    />
                  </div>
                </div>
                <div className="absolute w-[328px] h-[689px] top-0 left-[3px]">
                  <div className="absolute w-[4px] h-[5px] top-[684px] left-[66px] bg-[#9aa8b180]" />
                  <div className="absolute w-[5px] h-[4px] top-[620px] left-0 bg-[#9aa8b180]" />
                  <div className="absolute w-[5px] h-[6px] top-[70px] left-0 bg-[#e4e4e3a6]" />
                  <div className="absolute w-[5px] h-[4px] top-[620px] left-[324px] bg-[#9aa8b180]" />
                  <div className="absolute w-[5px] h-[5px] top-[70px] left-[324px] bg-[#e4e4e3a6]" />
                  <div className="absolute w-[5px] h-[4px] top-0 left-[258px] bg-[#e4e4e3a6]" />
                </div>
                <div className="absolute w-[48px] h-[4px] top-[7px] left-[143px] bg-[#141414] rounded-[8.61px] border-[0.29px] border-solid border-[#0d0d0d] shadow-[inset_0px_0px_1.44px_0.29px_#000000,inset_0.86px_0px_0px_#2a2a2a,inset_-0.86px_0px_0px_#2a2a2a]" />
                <div className="absolute w-[333px] h-[171px] top-[137px] left-0">
                  <div className="w-[3px] h-[54px] top-[117px] rounded-[1.2px] border-[0.45px] border-solid shadow-[inset_1.5px_0px_0px_#dadbd6,inset_1.5px_0px_1.2px_#dadbd6a8,inset_0.9px_0px_0px_#41423c,inset_-0.9px_-2.39px_0.6px_#41423c,inset_-0.9px_2.39px_0.6px_#41423c,inset_0px_0.9px_0px_#f2f3ed,inset_0px_-0.9px_0px_#f2f3ed] [border-image:linear-gradient(to_bottom,rgb(125,126,121),rgb(27,28,22)_25%,rgb(67,68,62)_50%,rgb(126,129,122)_68.23%,rgb(131,132,127)_93.73%)_1] absolute left-0 bg-[#c8c9c4] border-transparent" />
                  <div className="w-[3px] h-[55px] top-[51px] rounded-[1.1px] border-[0.22px] border-solid shadow-[inset_0.28px_0px_0px_#dadbd6,inset_-0.83px_-2.2px_0.83px_#dadbd633,inset_0px_2.2px_0.28px_#41423c4c,inset_-1.1px_0px_1.1px_#41423c,inset_0px_1.1px_0px_#41423c,inset_0px_-1.1px_0.55px_#f2f3ed,inset_-0.55px_0px_0px_#f2f3ed] [border-image:linear-gradient(to_bottom,rgb(125,126,121),rgb(27,28,22)_29.17%,rgb(67,68,62)_50%,rgb(126,129,122)_77.6%,rgb(131,132,127)_100%)_1] absolute left-0 bg-[#c8c9c4] border-transparent" />
                  <div className="absolute w-[3px] h-[29px] top-0 left-0 bg-[#c8c9c4] rounded-[1.1px] border-[0.22px] border-solid border-transparent shadow-[inset_0.28px_0px_0px_#dadbd6,inset_-0.83px_-2.2px_0.83px_#dadbd633,inset_0px_2.2px_0.28px_#41423c4c,inset_-1.1px_0px_1.1px_#41423c,inset_0px_1.1px_0px_#41423c,inset_0px_-1.1px_0.55px_#f2f3ed,inset_-0.55px_0px_0px_#f2f3ed] [border-image:linear-gradient(to_bottom,rgb(125,126,121),rgb(27,28,22)_29.17%,rgb(67,68,62)_50%,rgb(126,129,122)_75.52%,rgb(131,132,127)_100%)_1]" />
                  <div className="absolute w-[2px] h-[82px] top-[69px] left-[331px] bg-[#c8c9c4] rounded-[1.2px] border-[0.22px] border-solid border-transparent shadow-[inset_-1.2px_0px_0px_#dadbd6,inset_1.2px_-2.39px_0.6px_#dadbd6,inset_1.2px_2.39px_0.6px_#41423c,inset_-0.9px_0px_1.2px_#41423ca8,inset_0px_1.2px_0px_#f2f3ed,inset_0px_-1.2px_0px_#f2f3ed] [border-image:linear-gradient(to_bottom,rgb(125,126,121),rgb(27,28,22)_23.44%,rgb(67,68,62)_55.73%,rgb(126,129,122)_76.04%,rgb(131,132,127)_93.23%)_1]" />
                </div>
                <div className="absolute w-[81px] h-[23px] top-[23px] left-[127px] bg-[#090909] rounded-[10.71px]">
                  <div className="relative w-[23px] h-[23px] left-[59px] bg-[#090909] rounded-[11.29px]">
                    <div className="absolute w-[13px] h-[13px] top-[5px] left-[5px] rounded-[6.46px/6.58px] border-[0.4px] border-solid border-[#080f20] [background:conic-gradient(from_180deg_at_50%_50%,rgb(0,0,0)_0deg,rgba(0,0,0,0)_60deg,rgba(0,0,0,0)_318.75deg)] opacity-70" />
                    <img
                      className="absolute w-px h-[12px] top-[5px] left-[11px]"
                      alt="Line"
                      src="https://c.animaapp.com/QqKxfkgd/img/line.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1200px] items-center justify-between absolute top-[40px] left-[200px] rounded-[24px]">
          <div className="relative w-[163px] h-[64px]">
            <img
              className="absolute w-[64px] h-[64px] top-0 left-0 object-cover"
              alt="Logo img"
              src="https://c.animaapp.com/QqKxfkgd/img/logo-img-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center gap-[32px] relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] font-desktop-button font-[number:var(--desktop-button-font-weight)] text-dark text-[length:var(--desktop-button-font-size)] text-center tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] whitespace-nowrap [font-style:var(--desktop-button-font-style)]">
              Use cases
            </div>
            <div className="relative w-fit mt-[-1.00px] font-desktop-button font-[number:var(--desktop-button-font-weight)] text-dark text-[length:var(--desktop-button-font-size)] text-center tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] whitespace-nowrap [font-style:var(--desktop-button-font-style)]">
              Features
            </div>
            <div className="relative w-fit mt-[-1.00px] font-desktop-button font-[number:var(--desktop-button-font-weight)] text-dark text-[length:var(--desktop-button-font-size)] text-center tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] whitespace-nowrap [font-style:var(--desktop-button-font-style)]">
              How to start
            </div>
          </div>
          <Btn
            BG="light"
            className="!flex-[0_0_auto]"
            size="large"
            state="default"
            text="Get started"
            type="secondary"
          />
        </div>
        <div className="w-[1200px] top-[5825px] left-[200px] rounded-[40px] overflow-hidden [background:linear-gradient(180deg,rgb(159,204,250)_0%,rgb(9,116,241)_100%)] absolute h-[550px]">
          <div className="relative h-[550px]">
            <div className="w-[712px] top-0 left-[488px] absolute h-[550px]">
              <div className="relative w-[2221px] h-[2390px] top-[-743px] left-[-743px]">
                <div className="relative w-[1843px] h-[1781px]">
                  <img
                    className="absolute w-[732px] h-[550px] top-[743px] left-[723px] object-cover"
                    alt="Rombus"
                    src="https://c.animaapp.com/QqKxfkgd/img/rombus.png"
                  />
                  <img
                    className="absolute w-[633px] h-[268px] top-[1025px] left-[757px] mix-blend-color"
                    alt="Subtract"
                    src="https://c.animaapp.com/QqKxfkgd/img/subtract.svg"
                  />
                  <div className="absolute w-[1524px] h-[1436px] top-[173px] left-[160px] rotate-[165.00deg]">
                    <div className="relative w-[1301px] h-[842px] top-[191px] left-[208px]">
                      <img
                        className="absolute w-[1200px] h-[550px] top-[146px] left-[51px] rotate-[-165.00deg] object-cover"
                        alt="Element"
                        src="https://c.animaapp.com/QqKxfkgd/img/1a-1.png"
                      />
                      <img
                        className="absolute w-[1200px] h-[550px] top-[146px] left-[51px] rotate-[-165.00deg]"
                        alt="Mask group"
                        src="https://c.animaapp.com/QqKxfkgd/img/mask-group.png"
                      />
                    </div>
                  </div>
                  <img
                    className="absolute w-[234px] h-[170px] top-[1061px] left-[1005px] mix-blend-hue"
                    alt="Vector"
                    src="https://c.animaapp.com/QqKxfkgd/img/vector-620.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="absolute w-[1200px] h-[550px] top-0 left-0 mix-blend-overlay"
              alt="Bg img"
              src="https://c.animaapp.com/QqKxfkgd/img/bg-img.svg"
            />
            <div className="absolute top-[146px] left-[80px] font-desktop-h2-header font-[number:var(--desktop-h2-header-font-weight)] text-white text-[length:var(--desktop-h2-header-font-size)] tracking-[var(--desktop-h2-header-letter-spacing)] leading-[var(--desktop-h2-header-line-height)] whitespace-nowrap [font-style:var(--desktop-h2-header-font-style)]">
              Crypto Pay API
            </div>
            <p className="absolute w-[408px] top-[240px] left-[80px] font-[number:var(--desktop-base-text-font-weight)] text-white font-desktop-base-text text-[length:var(--desktop-base-text-font-size)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] [font-style:var(--desktop-base-text-font-style)]">
              Explore available methods and types
              <br />
              and integrate them in any programming language.
            </p>
            <Btn
              BG="dark"
              className="!absolute !left-[80px] !top-[345px]"
              divClassName="!tracking-[var(--mobile-button-letter-spacing)] !text-[length:var(--mobile-button-font-size)] ![font-style:var(--mobile-button-font-style)] !font-[number:var(--mobile-button-font-weight)] !font-mobile-button !leading-[var(--mobile-button-line-height)]"
              size="large"
              state="default"
              text="Open API Docs"
              type="secondary"
            />
          </div>
        </div>
        <div className="inline-flex flex-col items-center gap-[40px] px-[200px] py-[120px] absolute top-[3819px] left-0 bg-bg-light">
          <p className="relative w-fit mt-[-1.00px] font-desktop-h2-header font-[number:var(--desktop-h2-header-font-weight)] text-collection-1-main-text text-[length:var(--desktop-h2-header-font-size)] tracking-[var(--desktop-h2-header-letter-spacing)] leading-[var(--desktop-h2-header-line-height)] whitespace-nowrap [font-style:var(--desktop-h2-header-font-style)]">
            <span className="text-[#252525] font-desktop-h2-header [font-style:var(--desktop-h2-header-font-style)] font-[number:var(--desktop-h2-header-font-weight)] tracking-[var(--desktop-h2-header-letter-spacing)] leading-[var(--desktop-h2-header-line-height)] text-[length:var(--desktop-h2-header-font-size)]">
              Quick start using{" "}
            </span>
            <span className="text-[#41a4df] font-desktop-h2-header [font-style:var(--desktop-h2-header-font-style)] font-[number:var(--desktop-h2-header-font-weight)] tracking-[var(--desktop-h2-header-letter-spacing)] leading-[var(--desktop-h2-header-line-height)] text-[length:var(--desktop-h2-header-font-size)]">
              Crypto Pay
            </span>
          </p>
          <div className="inline-flex items-center gap-[120px] relative flex-[0_0_auto]">
            <div className="flex w-[488px] items-start flex-col gap-[20px] relative">
              <div className="relative w-[64px] h-[64px] rounded-[900px] overflow-hidden shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(1,4,23)_0%,rgb(43,51,63)_100%)]">
                <div className="absolute h-[46px] top-[7px] left-[21px] font-[number:var(--desktop-h3-header-font-weight)] text-[length:var(--desktop-h3-header-font-size)] text-center tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] font-desktop-h3-header text-[#ffffff] whitespace-nowrap [font-style:var(--desktop-h3-header-font-style)]">
                  1
                </div>
              </div>
              <div className="relative self-stretch font-desktop-h3-header font-[number:var(--desktop-h3-header-font-weight)] text-dark text-[length:var(--desktop-h3-header-font-size)] tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] [font-style:var(--desktop-h3-header-font-style)]">
                Authorizing your app
              </div>
              <div className="flex flex-col items-center justify-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                  <span className="text-[#0d0d12] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                    1. Open{" "}
                  </span>
                  <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                    @CryptoBot
                  </span>
                </p>
                <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                  <span className="text-[#0d0d12] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                    2. Go to{" "}
                  </span>
                  <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                    Crypto Pay{" "}
                  </span>
                </p>
                <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                  <span className="text-[#0d0d12] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                    3. Tap{" "}
                  </span>
                  <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                    Create App{" "}
                  </span>
                </p>
                <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                  <span className="text-[#0d0d12] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                    4. Get{" "}
                  </span>
                  <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                    API Token
                  </span>
                </p>
              </div>
            </div>
            <div className="[background:linear-gradient(180deg,rgb(142,197,252)_0%,rgb(224,195,252)_100%)] relative w-[590px] h-[488px] rounded-[40px] overflow-hidden">
              <div className="flex flex-col w-[392px] items-start gap-[4.47px] relative top-[117px] left-[99px] shadow-[0px_2.82px_30.05px_#62392a1f]">
                <div className="flex flex-col w-[392px] items-start gap-[3px] px-[15.66px] py-[10px] relative flex-[0_0_auto] bg-[#ffffff] rounded-[16.78px_16.78px_7.83px_7.83px]">
                  <div className="relative self-stretch w-full h-[157px] mr-[-2.00px]">
                    <div className="relative w-[361px] h-[157px]">
                      <p className="absolute w-[361px] top-0 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[19px] tracking-[-0.56px] leading-[22.4px]">
                        <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[19px] tracking-[-0.56px] leading-[22.4px]">
                          Here is the token for the app{" "}
                        </span>
                        <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[19px] tracking-[-0.56px] leading-[22.4px]">
                          @GoodsBot
                          <br />
                        </span>
                        <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[19px] tracking-[-0.56px] leading-[22.4px]">
                          <br />
                          114935:AA9xMcRqHYZYl6CQlkhBStMAwTFQ1s6iJHM
                          <br />
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp; This token can be used by anyone to control your app. Keep and store
                          it safely.
                        </span>
                      </p>
                      <div className="absolute w-[18px] h-[18px] top-[114px] left-0 bg-[url(https://c.animaapp.com/QqKxfkgd/img/warning@2x.png)] bg-cover bg-[50%_50%]" />
                    </div>
                  </div>
                  <div className="relative self-stretch [font-family:'SF_Pro-Medium',Helvetica] font-medium text-dark-40 text-[14.5px] text-right tracking-[-0.56px] leading-[20.1px]">
                    21:30
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[9.39px] px-0 py-[15.02px] relative self-stretch w-full flex-[0_0_auto] bg-[#8197d1] rounded-[7.83px_7.83px_16.78px_16.78px]">
                  <div className="relative w-fit mt-[-0.95px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff] text-[19px] tracking-[0] leading-[17.9px] whitespace-nowrap">
                    Revoke Token
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-[122px] relative flex-[0_0_auto]">
            <div className="[background:linear-gradient(180deg,rgb(252,182,159)_0%,rgb(255,236,210)_100%)] relative w-[590px] h-[488px] rounded-[40px] overflow-hidden">
              <div className="flex flex-col w-[394px] items-start gap-[4.76px] p-[16.68px] relative top-[200px] left-[98px] bg-dark rounded-[20px]">
                <p className="relative w-fit mt-[-1.01px] [font-family:'SF_Mono-Regular',Helvetica] font-normal text-transparent text-[18px] tracking-[-0.60px] leading-[27.4px]">
                  <span className="text-[#ffffff]">asset</span>
                  <span className="text-[#5db0e2]">=</span>
                  <span className="text-[#fcef8f]">TON</span>
                  <span className="text-[#d46464]">&amp;</span>
                  <span className="text-[#ffffff]">amount</span>
                  <span className="text-[#5db0e2]">=</span>
                  <span className="text-[#fcef8f]">
                    2.75
                    <br />
                  </span>
                  <span className="text-[#ffffff]">{"{"}&#34;asset&#34;:</span>
                  <span className="text-[#5db0e2]">&#34;TON&#34;</span>
                  <span className="text-[#ffffff]">, &#34;amount&#34;: </span>
                  <span className="text-[#5db0e2]">&#34;2.75&#34;</span>
                  <span className="text-[#ffffff]">{"}"}</span>
                </p>
              </div>
            </div>
            <div className="flex w-[488px] items-start flex-col gap-[20px] relative">
              <div className="relative w-[64px] h-[64px] rounded-[900px] overflow-hidden shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(1,4,23)_0%,rgb(43,51,63)_100%)]">
                <div className="absolute h-[46px] top-[7px] left-[18px] font-[number:var(--desktop-h3-header-font-weight)] text-[length:var(--desktop-h3-header-font-size)] text-center tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] font-desktop-h3-header text-[#ffffff] whitespace-nowrap [font-style:var(--desktop-h3-header-font-style)]">
                  2
                </div>
              </div>
              <div className="relative self-stretch font-desktop-h3-header font-[number:var(--desktop-h3-header-font-weight)] text-dark text-[length:var(--desktop-h3-header-font-size)] tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] [font-style:var(--desktop-h3-header-font-style)]">
                Crypto Pay API Request
              </div>
              <p className="relative self-stretch font-[number:var(--desktop-base-text-font-weight)] text-dark-80 font-desktop-base-text text-[length:var(--desktop-base-text-font-size)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] [font-style:var(--desktop-base-text-font-style)]">
                Requests are only served over HTTPS
                <br />
                To pass parameters use:
              </p>
              <div className="flex flex-col items-center justify-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
                  URL query string
                </div>
                <div className="relative self-stretch font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
                  application/json
                </div>
                <div className="relative self-stretch font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
                  application/x-www-form-urlencoded
                </div>
                <div className="relative self-stretch font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]">
                  multipart/form-data
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-[122px] relative flex-[0_0_auto]">
            <div className="flex w-[488px] items-start flex-col gap-[20px] relative">
              <div className="relative w-[64px] h-[64px] rounded-[900px] overflow-hidden shadow-[0px_0px_8px_#b6b9bf0a,0px_2px_3px_#00000005] [background:linear-gradient(180deg,rgb(1,4,23)_0%,rgb(43,51,63)_100%)]">
                <div className="absolute h-[46px] top-[7px] left-[17px] font-[number:var(--desktop-h3-header-font-weight)] text-[length:var(--desktop-h3-header-font-size)] text-center tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] font-desktop-h3-header text-[#ffffff] whitespace-nowrap [font-style:var(--desktop-h3-header-font-style)]">
                  3
                </div>
              </div>
              <div className="relative self-stretch font-desktop-h3-header font-[number:var(--desktop-h3-header-font-weight)] text-dark text-[length:var(--desktop-h3-header-font-size)] tracking-[var(--desktop-h3-header-letter-spacing)] leading-[var(--desktop-h3-header-line-height)] [font-style:var(--desktop-h3-header-font-style)]">
                Getting updates
              </div>
              <p className="relative self-stretch font-[number:var(--desktop-base-text-font-weight)] text-dark-80 font-desktop-base-text text-[length:var(--desktop-base-text-font-size)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] [font-style:var(--desktop-base-text-font-style)]">
                There are two ways of receiving
                <br />
                updates for your app:
              </p>
              <div className="flex flex-col items-center justify-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                  <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                    getInvoices
                  </span>
                  <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                    {" "}
                    method to get a list of created invoices.
                  </span>
                </p>
                <p className="relative self-stretch font-normal text-transparent [font-family:'Inter',Helvetica] text-[20px] tracking-[0] leading-[24.0px]">
                  <span className="font-[number:var(--desktop-button-font-weight)] text-[#41a4df] font-desktop-button [font-style:var(--desktop-button-font-style)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] text-[length:var(--desktop-button-font-size)]">
                    Webhooks
                  </span>
                  <span className="text-[#111111cc] font-desktop-base-text [font-style:var(--desktop-base-text-font-style)] font-[number:var(--desktop-base-text-font-weight)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] text-[length:var(--desktop-base-text-font-size)]">
                    {" "}
                    to receive updates in realtime.
                  </span>
                </p>
              </div>
            </div>
            <div className="[background:linear-gradient(180deg,rgb(194,233,251)_0%,rgb(161,196,253)_100%)] relative w-[590px] h-[488px] rounded-[40px] overflow-hidden">
              <div className="inline-flex flex-col items-start gap-[4.76px] p-[16.68px] relative top-[145px] left-[93px] bg-dark rounded-[20px]">
                <p className="relative w-fit mt-[-1.01px] [font-family:'SF_Mono-Regular',Helvetica] font-normal text-transparent text-[18px] tracking-[-0.60px] leading-[27.4px]">
                  <span className="text-[#61baef]">Invoice</span>
                  <span className="text-[#ffffff]">
                    (<br />
                    &nbsp;&nbsp;{" "}
                  </span>
                  <span className="text-[#61baef]">payload:</span>
                  <span className="text-[#ffffff]">
                    {" "}
                    “item:monthly_premium”,
                    <br />
                  </span>
                  <span className="text-[#61baef]">&nbsp;&nbsp; status:</span>
                  <span className="text-[#ffffff]">&nbsp;&nbsp;“paid”, </span>
                  <span className="text-[#61baef]">&nbsp;&nbsp; amount:</span>
                  <span className="text-[#ffffff]">&nbsp;&nbsp;“3.99”, </span>
                  <span className="text-[#61baef]">&nbsp;&nbsp; asset:</span>
                  <span className="text-[#ffffff]">&nbsp;&nbsp; “USDT” )</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App

