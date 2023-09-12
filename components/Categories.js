import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

function Categories({ category }) {
  return (
    <>
      <ul>
        <li>
          <div>
            <Link href={`/categories/${category.slug}`}>
              <Image
                src={category.img}
                width={300}
                height={300}
                alt="product image"
                className="flec justify-center"
              />
              <div className="flex pt-3">
                <h1 className="md:text-xl md:font-bold font-semibold">
                  {category.name}
                </h1>
                <div className="md:ml-5 md:mt-[3px] ml-2">
                  <BsArrowRight size={25} />
                </div>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Categories;
