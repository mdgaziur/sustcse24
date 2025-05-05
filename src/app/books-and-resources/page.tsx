import NavBar from "@/components/nav";
import Head from "next/head";
import {Books, Resources} from "@/app/books-and-resources/resources";
import PageStyles from "./page.module.css";

export const metadata = {
  title: "SUST CSE 24 - Books and References",
  description: "Important books and references"
};

export default function BooksAndReferences() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>SUST CSE 24 - Books and References</title>
      </Head>
      <NavBar />
      <div className="flex-1 flex flex-col items-center gap-5 p-5 w-full">
        <div className={"w-full flex flex-col items-center gap-5"}>
          <h2>Books</h2>
          <div className={PageStyles["table-container"]}>
            <table className={PageStyles["resources-table"]}>
              <thead>
              <tr>
                <td className={PageStyles["resources-table-td"]}>Name</td>
                <td className={PageStyles["resources-table-td"]}>Course</td>
                <td className={PageStyles["resources-table-td"]}>Author</td>
              </tr>
              </thead>
              <tbody>
              {
                Books.map((resource, idx) => (
                  <tr key={idx}>
                    <td className={PageStyles["resources-table-td"]}>
                      {
                        resource.link ?
                            <a className={`${PageStyles["resources-table-a"]} wrap-anywhere`} href={resource.link}>{resource.name}</a>
                            : <>{resource.name}</>
                      }
                    </td>
                    <td className={PageStyles["resources-table-td"]}>{resource.course}</td>
                    <td className={PageStyles["resources-table-td"]}>{resource.author}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
        <div className={"w-full flex flex-col items-center gap-5"}>
          <h2>Resources</h2>
          <div className={PageStyles["table-container"]}>
            <table className={PageStyles["resources-table"]}>
              <thead>
                <tr>
                  <td className={PageStyles["resources-table-td"]}>Name</td>
                  <td className={PageStyles["resources-table-td"]}>Description</td>
                  <td className={PageStyles["resources-table-td"]}>Type</td>
                </tr>
              </thead>
              <tbody>
              {
                Resources.map((resource, idx) => (
                  <tr key={idx}>
                    <td className={PageStyles["resources-table-td"]}>
                      {
                        resource.link ?
                            <a className={`${PageStyles["resources-table-a"]} wrap-anywhere`} href={resource.link}>{resource.name}</a>
                            : <>{resource.name}</>
                      }
                    </td>
                    <td className={PageStyles["resources-table-td"]}>{resource.description}</td>
                    <td className={PageStyles["resources-table-td"]}>{resource.type}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}