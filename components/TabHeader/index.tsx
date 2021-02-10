export default function TabHeader({
  label,
  items,
  itemKey,
}: {
  label: string;
  items: any[];
  itemKey: string;
}) {
  return (
    <div className="md:flex">
      {label && (
        <div className="text-center flex-basis-20 md:p-2 md:px-4 text-white font-sans md:text-3xl bg-black">
          {label}
        </div>
      )}
      <div className="w-full">
        <div className="flex">
          {items.map((item) => {
            return (
              <div key={item} className="flex-1 text-center">
                <p className="dash-header-top font-poppins antialiased tracking-tight text-sm py-2">
                  {item[itemKey]}{' '}
                </p>
                <p className="dash-header-bottom font-poppins antialiased tracking-tight text-sm py-1 text-white border-lightgray">
                  {item.value}{' '}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          .flex-basis-20 {
            flex-basis: 20%;
          }
        `}
      </style>
    </div>
  );
}
