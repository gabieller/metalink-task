import Image from "next/image";

//TODO: fix border gradient
function SideBar() {
  return (
    <div className="bg-white shadow w-25 my-2">
      <ul className="list-reset">
        <li>
          <a className="block p-4 border-white bg-white hover:bg-gray-50 border-l-4">
            <div>
              <Image src="/images/icon.png" width={25} height={30} />
            </div>
          </a>
        </li>
        <li>
          <a className="block p-4 font-bold bg-white hover:bg-gray-50  border-l-4 border-purple-800">
            <div>
              <Image src="/images/search.svg" width={30} height={30} />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
