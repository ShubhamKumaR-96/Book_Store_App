import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/baseURL';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
    credentials: 'include',
    prepareHeaders: (headers) => { // Corrected case
        const token = localStorage.getItem('token');
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

const booksApi = createApi({
    reducerPath: 'bookApi',
    baseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({ // Corrected to "endpoints"
        fetchAllBooks: builder.query({
            query: () => "/",
            providesTags: ["Books"],
        }),
        fetchById:builder.query({
            query:(id)=>`/${id}`,
            providesTags:(result,error,id)=>[{type:'Books',id}]
        }),
        addBook:builder.mutation({
            query:(newBook)=>({
                url:`/create-book`,
                method:"POST",
                body:newBook
            }),
            invalidatesTags:["Books"]
        }),
        updateBook:builder.mutation({
            query:(id,...rest)=>({
                url:`/edit/${id}`,
                method:"PUT",
                body:rest,
                headers:{
                    'Content-Type':'application/json'
                }
            }),
            invalidatesTags:["Books"]
        }),
        deleteBook:builder.mutation({
            query:(id)=>`/${id}`,
            method:"DELETE",
        }),
        invalidatesTags:["Books"]
    }),
});

export const { useFetchAllBooksQuery ,useFetchByIdQuery,useAddBookMutation,useUpdateBookMutation,useDeleteBookMutation } = booksApi;
export default booksApi;
