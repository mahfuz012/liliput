"use client";
import TitleSection from "@/Components/TitleSection";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="overflow-auto w-1/2 px-10 ml-5 py-10">
        <h1 className="text-center py-4 text-xl font-bold">Manage Users</h1>
        <table className="table w-full">
          {/* head */}
          <thead className="text-black text-[16px]">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Admim Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle">
                      <Image
                        src={user.photo}
                        width={36}
                        height={36}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    // onClick={() => handleMakeAdmin(user)}
                    className="btn btn-sm text-black bg-base-300 hover:bg-gray-300"
                  >
                    Make Admin
                  </button>
                  {/* {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-md text-white bg-lime-700"
                    >
                      Make Admin
                    </button>
                  )} */}
                </td>
                <td className="text-center">
                  <button
                    // onClick={() => handleDelete(user)}
                    className="btn btn-sm text-white bg-red-400"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsersPage;
