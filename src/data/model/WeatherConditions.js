import SunnySvg from "../../assets/weather-condition/sunny.svg"
import PartlyCloudySvg from "../../assets/weather-condition/partly-cloudy.svg"
import PartlyCloudyNightSvg from "../../assets/weather-condition/partly-cloudy-night.svg"
import CloudySvg from "../../assets/weather-condition/cloudy.svg"
import CloudyNightSvg from "../../assets/weather-condition/cloudy-night.svg"
import OvercastSvg from "../../assets/weather-condition/overcast.svg"
import MistSvg from "../../assets/weather-condition/mist.svg"
import MistNightSvg from "../../assets/weather-condition/mist-night.svg"
import PatchySnowSvg from "../../assets/weather-condition/patchy-snow.svg"
import PatchyRainSvg from "../../assets/weather-condition/patchy-rain.svg"
import PatchySleetSvg from "../../assets/weather-condition/patchy-sleet.svg"
import PatchyDrizzleSvg from "../../assets/weather-condition/patchy-drizzle.svg"
import ThunderOutbreakSvg from "../../assets/weather-condition/thunder-outbreak.svg"
import SnowSvg from "../../assets/weather-condition/snow.svg"
import DrizzleSvg from "../../assets/weather-condition/drizzle.svg"
import SleetCloudSvg from "../../assets/weather-condition/sleet.svg"
import FogSvg from "../../assets/weather-condition/fog.svg"
import FogNightSvg from "../../assets/weather-condition/fog-night.svg"
import ModerateRainSvg from "../../assets/weather-condition/moderate-rain.svg"
import IcePalletsSvg from "../../assets/weather-condition/ice-pellets.svg"
import TorrentialSvg from "../../assets/weather-condition/torrential.svg"
import BlizzardSvg from "../../assets/weather-condition/blizzard.svg"
import HeavyRainSvg from "../../assets/weather-condition/heavy-rain.svg"

// This will return the condition depending on the weather code in the server
/**  TODO: set the code for the partly cloudy. mist, haze
 *  and cloudy svg to be a moon for the night */
const WeatherConditions = (function () {
  const conditions = [
    {
      code: 1000,
      day: "Sunny",
      night: "Clear",
      img: SunnySvg,
    },
    {
      code: 1003,
      day: "Partly cloudy",
      night: "Partly cloudy",
      img: PartlyCloudySvg,
      imgNight: PartlyCloudyNightSvg,
    },
    {
      code: 1006,
      day: "Cloudy",
      night: "Cloudy",
      img: CloudySvg,
      imgNight: CloudyNightSvg,
    },
    {
      code: 1009,
      day: "Overcast",
      night: "Overcast",
      img: OvercastSvg,
    },
    {
      code: 1030,
      day: "Mist",
      night: "Mist",
      img: MistSvg,
      imgNight: MistNightSvg,
    },
    {
      code: 1063,
      day: "Patchy rain possible",
      night: "Patchy rain possible",
      img: PatchyRainSvg,
    },
    {
      code: 1066,
      day: "Patchy snow possible",
      night: "Patchy snow possible",
      img: PatchySnowSvg,
    },
    {
      code: 1069,
      day: "Patchy sleet possible",
      night: "Patchy sleet possible",
      img: PatchySleetSvg,
    },
    {
      code: 1072,
      day: "Patchy freezing drizzle possible",
      night: "Patchy freezing drizzle possible",
      img: PatchyDrizzleSvg,
    },
    {
      code: 1087,
      day: "Thundery outbreaks possible",
      night: "Thundery outbreaks possible",
      img: ThunderOutbreakSvg,
    },
    {
      code: 1114,
      day: "Blowing snow",
      night: "Blowing snow",
      img: SnowSvg,
    },
    {
      code: 1117,
      day: "Blizzard",
      night: "Blizzard",
      img: BlizzardSvg,
    },
    {
      code: 1135,
      day: "Fog",
      night: "Fog",
      img: FogSvg,
      imgNight: FogNightSvg,
    },
    {
      code: 1147,
      day: "Freezing fog",
      night: "Freezing fog",
      img: FogSvg,
      imgNight: FogNightSvg,
    },
    {
      code: 1150,
      day: "Patchy light drizzle",
      night: "Patchy light drizzle",
      img: PatchyDrizzleSvg,
    },
    {
      code: 1153,
      day: "Light drizzle",
      night: "Light drizzle",
      img: PatchyDrizzleSvg,
    },
    {
      code: 1168,
      day: "Freezing drizzle",
      night: "Freezing drizzle",
      img: PatchyDrizzleSvg,
    },
    {
      code: 1171,
      day: "Heavy freezing drizzle",
      night: "Heavy freezing drizzle",
      img: DrizzleSvg,
    },
    {
      code: 1180,
      day: "Patchy light rain",
      night: "Patchy light rain",
      img: PatchyRainSvg,
    },
    {
      code: 1183,
      day: "Light rain",
      night: "Light rain",
      img: PatchyRainSvg,
    },
    {
      code: 1186,
      day: "Moderate rain at times",
      night: "Moderate rain at times",
      img: PatchyRainSvg,
    },
    {
      code: 1189,
      day: "Moderate rain",
      night: "Moderate rain",
      img: ModerateRainSvg,
    },
    {
      code: 1192,
      day: "Heavy rain at times",
      night: "Heavy rain at times",
      img: HeavyRainSvg,
    },
    {
      code: 1195,
      day: "Heavy rain",
      night: "Heavy rain",
      img: HeavyRainSvg,
    },
    {
      code: 1198,
      day: "Light freezing rain",
      night: "Light freezing rain",
      img: PatchyRainSvg,
    },
    {
      code: 1201,
      day: "Moderate or heavy freezing rain",
      night: "Moderate or heavy freezing rain",
      img: ModerateRainSvg,
    },
    {
      code: 1204,
      day: "Light sleet",
      night: "Light sleet",
      img: PatchySleetSvg,
    },
    {
      code: 1207,
      day: "Moderate or heavy sleet",
      night: "Moderate or heavy sleet",
      img: SleetCloudSvg,
    },
    {
      code: 1210,
      day: "Patchy light snow",
      night: "Patchy light snow",
      img: PatchySnowSvg,
    },
    {
      code: 1213,
      day: "Light snow",
      night: "Light snow",
      img: SnowSvg,
    },
    {
      code: 1216,
      day: "Patchy moderate snow",
      night: "Patchy moderate snow",
      img: SnowSvg,
    },
    {
      code: 1219,
      day: "Moderate snow",
      night: "Moderate snow",
      img: SnowSvg,
    },
    {
      code: 1222,
      day: "Patchy heavy snow",
      night: "Patchy heavy snow",
      img: SnowSvg,
    },
    {
      code: 1225,
      day: "Heavy snow",
      night: "Heavy snow",
      img: SnowSvg,
    },
    {
      code: 1237,
      day: "Ice pellets",
      night: "Ice pellets",
      img: SnowSvg,
    },
    {
      code: 1240,
      day: "Light rain shower",
      night: "Light rain shower",
      img: PatchyRainSvg,
    },
    {
      code: 1243,
      day: "Moderate or heavy rain shower",
      night: "Moderate or heavy rain shower",
      img: HeavyRainSvg,
    },
    {
      code: 1246,
      day: "Torrential rain shower",
      night: "Torrential rain shower",
      img: TorrentialSvg,
    },
    {
      code: 1249,
      day: "Light sleet showers",
      night: "Light sleet showers",
      img: SleetCloudSvg,
    },
    {
      code: 1252,
      day: "Moderate or heavy sleet showers",
      night: "Moderate or heavy sleet showers",
      img: SleetCloudSvg,
    },
    {
      code: 1255,
      day: "Light snow",
      night: "Light snow showers",
      img: SnowSvg,
    },
    {
      code: 1258,
      day: "Moderate or heavy snow showers",
      night: "Moderate or heavy snow showers",
      img: SnowSvg,
    },
    {
      code: 1261,
      day: "Light showers of ice pellets",
      night: "Light showers of ice pellets",
      img: IcePalletsSvg,
    },
    {
      code: 1264,
      day: "Moderate or heavy showers of ice pellets",
      night: "Moderate or heavy showers of ice pellets",
      img: IcePalletsSvg,
    },
    {
      code: 1273,
      day: "Patchy light rain with thunder",
      night: "Patchy light rain with thunder",
      img: PatchyRainSvg,
    },
    {
      code: 1276,
      day: "Moderate or heavy rain with thunder",
      night: "Moderate or heavy rain with thunder",
      img: ModerateRainSvg,
    },
    {
      code: 1279,
      day: "Patchy light snow with thunder",
      night: "Patchy light snow with thunder",
      img: PatchySnowSvg,
    },
    {
      code: 1282,
      day: "Moderate or heavy snow with thunder",
      night: "Moderate or heavy snow with thunder",
      img: SnowSvg,
    },
  ]

  return {
    getCondition(code, isDay) {
      const obj = {
        text: null,
        img: null,
      }
      conditions.forEach((condition) => {
        if (condition.code === code) {
          // If its not day and has imgNight prop
          if (!isDay && condition.hasOwnProperty("imgNight")) {
            obj.text = condition.night
            obj.img = condition.imgNight
            return
          }
          obj.text = condition.day
          obj.img = condition.img
        }
      })

      return obj
    },
  }
})()

export { WeatherConditions }
