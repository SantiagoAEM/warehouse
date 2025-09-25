
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage, Link } from '@inertiajs/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import {  PlusIcon,FilePenLine, Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
        {
        title: 'Products',
        href: 'products/',
    },
];

interface Product{
    id:number;
    name:string;
    description:string;
    stock:number;
    price:number;
};

interface PageProps {
  products: {
    data: Product[];
    // puedes añadir más campos si quieres usar paginación:
    current_page: number;
    last_page: number;
    per_page: number;
  };
   [key: string]: unknown; 
} 

export default function Index() {
    const { products } = usePage<PageProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products List" />
            <div className="flex m-4 justify-end">
                <Link href="/products/create"><Button  size="sm" type="button">
                    <PlusIcon />
                    Add Product
                </Button></Link>
            </div>
           <Table>
                <TableCaption>A list of your Products.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-left">-</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.data.map((product) => (
                    <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell >
                        <Link href={`/products/${product.id}/edit`} title='Edit' >
                        <Button  size="sm" type="button" >
                            <FilePenLine />                            
                        </Button></Link>
                            <Link href={`/products/${product.id}/delete`} className="m-1" title='Delete'>
                            <Button  size="sm" type="button" >
                            <Trash />
                            
                        </Button></Link>
                    </TableCell>
                    </TableRow>
                     ))}
                </TableBody>
            </Table>
        </AppLayout>
    );
}
