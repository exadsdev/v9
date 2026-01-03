import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./home.css";

export default function Item() {
  const urls =
    process.env.SHOP_URL ||
    "";

  // cache buster (เปลี่ยนทุกครั้งที่ deploy)
  const v = Date.now();

  return (
    <div className="box container p-0">
      {[1, 2, 3, 4, 5, 6].map((id) => (
        <div className="item" key={id}>
          <Link href={`${urls}/cart.php?id=${id}&ref=mobile`}>
            <div className="img-wrap">
              <Image
                src={`${urls}/img/phone/${id}.gif?v=${v}`}
                alt={`โทรศัพท์มือถือ PG รุ่น V9 ${id}`}
                fill
                sizes="33vw"
                unoptimized
                priority
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
