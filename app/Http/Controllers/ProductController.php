<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $products = Product::paginate(15); 
        return  inertia('products/index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('products/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
       $data = $request->validated();
       Product::create($data);
       return redirect()->route('products.index')->with('success', 'product created');

    }


    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
       return inertia('products/edit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
         $data = $request->validate([
            'name' => ['required','string','max:255'],
            'description' => ['nullable','string','max:1000'],
            'stock' => ['required','numeric','min:0'],
            'price' => ['required','numeric','min:0'],
        ]);

        $product->update($data);

         return redirect()->route('products.index')->with('success', 'Product updated');
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
