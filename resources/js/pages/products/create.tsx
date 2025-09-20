
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
        {
        title: 'Product',
        href: '/products/',
    },
            {
        title: 'Product create',
        href: '/products/create',
    },
];

export default function CreateProduct() {

    const {data, setData, post, processing, errors} = useForm({
        name:'',
        description:'',
        stock:'',
        price:'',
    });

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        post('/products');
    };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create product" />



            <form className="max-w-md mx-auto m-4" method='post' onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <Input name="floating_name" id="floating_name" className="focus-visible:ring-0 focus:ring-0 focus:outline-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " 
                    placeholder=" " 
                    required
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                />
                <label for="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product name</label> 
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <Textarea id="description"  name="description"  className="dark:bg-transparent focus-visible:ring-0 focus:ring-0 focus:outline-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " 
                    placeholder=" " 
                    required 
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                />
                <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <Input name="floating_stock" id="floating_stock" className="focus-visible:ring-0 focus:ring-0 focus:outline-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " 
                        placeholder=" " 
                        required
                        value={data.stock}
                        onChange={e => setData('stock', e.target.value)}
                    />
                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stock</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <Input name="floating_price" id="floating_price" className="focus-visible:ring-0 focus:ring-0 focus:outline-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " 
                        placeholder=" " 
                        required
                        value={data.price}
                        onChange={e => setData('price', e.target.value)}
                    />
                    <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
            </form>

        </AppLayout>
    );
}
