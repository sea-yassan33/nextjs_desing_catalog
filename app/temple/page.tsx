import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
// 型定義
type Templat = {
  id: number;
  title: string;
  category?: string;
  url?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
};
// メンバー情報
const templat_list: Templat[] = [
  { id:1,title: "サンプル01", category: "ヘルスケア",url:"/temple/sample01", image: "/img/home_hero.png", createdAt: "2023-01-01", updatedAt: "2023-01-01" },
  { id:2,title: "サンプル02", category: "金融", image: "", createdAt: "2023-01-02", updatedAt: "2023-01-02" },
  { id:3,title: "サンプル03", category: "スポーツ", image: "", createdAt: "2023-01-03", updatedAt: "2023-01-03" },
  { id:4,title: "サンプル04", category: "建築", image: "", createdAt: "2023-01-04", updatedAt: "2023-01-04" },
  { id:5,title: "サンプル05", category: "マーケット", image: "", createdAt: "2023-01-05", updatedAt: "2023-01-05" },
  { id:6,title: "サンプル06", category: "その他", image: "", createdAt: "2023-01-06", updatedAt: "2023-01-06" },
  { id:7,title: "サンプル07", category: "その他", image: "", createdAt: "2023-01-07", updatedAt: "2023-01-07" },
  { id:8,title: "サンプル08", category: "スポーツ", image: "", createdAt: "2023-01-08", updatedAt: "2023-01-08" },
];
export default function TemplePage() {
  return (
    <main>
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">テンプレートリスト</h2>
        <p className="text-gray-500 mb-2 max-w-2xl mx-auto">
          以下は、Next.jsとTailwind CSSを使用したテンプレートの例です。
        </p>
        <p className="text-gray-500 mb-2 max-w-2xl mx-auto">
          レスポンシブデザインとモダンなUIコンポーネントを備えています。
        </p>
        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
          迅速な開発をサポートします。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templat_list.map((temp) => (
            <Link  key={temp.id} href={temp.url || "#"}>
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition">
                <CardContent className="p-0">
                  <div className="relative w-full h-64">
                    {temp.image 
                      ? <Image src={temp.image} alt={temp.title} fill className="object-cover"/>
                      : <Image src="/no_img.svg" alt={temp.title} fill className="object-cover"/>
                    }
                  </div>
                  <div className="p-4 text-left">
                    <h3 className="font-semibold text-lg">{temp.title}</h3>
                    <p className="text-sm text-gray-500">{temp.category}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
