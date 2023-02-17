import Counter from "./counter";
// import DoneButton from "./disappearingButton";
import { FcSportsMode, FcLinux, FcReading, FcSelfie } from "react-icons/fc";

const features = [
  {
    name: "exercising",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: FcSportsMode,
  },
  {
    name: "Coding",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: FcLinux,
  },
  {
    name: "Reading",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: FcReading,
  },
  {
    name: "Call Parents",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FcSelfie,
  },
];

export default function Example() {
  return (
    <div className="body py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-800">
            Healthy habits for a better life
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            This is your habbit Tracker!
          </p>
        </div> */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-20 bg-orange-50 rounded-lg "
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div
                    className="absolute top-5 left-2 flex items-center justify-center rounded-lg Class
                    Properties"
                  >
                    <feature.icon className="w-24  h-24"></feature.icon>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 pl-6">
                  {feature.description}
                </dd>
                <Counter />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
