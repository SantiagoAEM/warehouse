
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage, Link, router } from '@inertiajs/react';
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
import Swal from 'sweetalert2';

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
    // añadir más campos si quieres usar paginación:
    current_page: number;
    last_page: number;
    per_page: number;
  };
   [key: string]: unknown; 
}

const handleDelete = (id: number) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      router.delete(`/products/${id}`, {
        onSuccess: () => {
          Swal.fire('Deleted!', 'Product has been deleted.', 'success');
        },
        onError: () => {
          Swal.fire('Error!', 'There was a problem deleting the product.', 'error');
        },
      });
    }
  });
};


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
                    <TableCell className=' space-x-2'>
                        <Link href={`/products/${product.id}/edit`} title='Edit' >
                        <Button  
                            size="sm" 
                            type="button" 
                            className="text-green-500"
                        >
                            <FilePenLine />                            
                        </Button>
                        </Link>
                        <Button
                            size="sm"
                            type="button"
                            className="text-red-500"
                            title="Delete"
                            onClick={() => handleDelete(product.id)}
                            >
                            <Trash />
                        </Button>
                    </TableCell>
                    </TableRow>
                     ))}
                </TableBody>
            </Table>

        </AppLayout>
    );
}
