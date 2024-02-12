"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const CompaniesPage = () => {
  interface Company {
    id: number;
    name: string;
    description: string;
    industry: string;
    established_year: string | null; // 日付の文字列またはnull
    headquarters: string;
    website_url: string;
    number_of_employees: number | null;
    capital: number | null;
    logo: string;
  }

  const [companies, setCompanies] = useState<Company[]>([]);
  const localURL = "http://localhost:8000/companies/";
  const remoteURL = "https://statck-match-api.vercel.app/companies/";

  useEffect(() => {
    // 仮のデータフェッチ処理
    // 実際にはAPIからデータをフェッチする
    const fetchData = async () => {
      const response = await fetch(localURL);
      const data: Company[] = await response.json();
      setCompanies(data);
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>企業名</TableCell>
            <TableCell align="right">業種</TableCell>
            <TableCell align="right">設立年</TableCell>
            <TableCell align="right">本社所在地</TableCell>
            <TableCell align="right">ウェブサイト</TableCell>
            <TableCell align="right">従業員数</TableCell>
            <TableCell align="right">資本金</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies &&
            companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell component="th" scope="row">
                  {company.name}
                </TableCell>
                <TableCell align="right">{company.industry}</TableCell>
                <TableCell align="right">{company.established_year}</TableCell>
                <TableCell align="right">{company.headquarters}</TableCell>
                <TableCell align="right">{company.website_url}</TableCell>
                <TableCell align="right">
                  {company.number_of_employees}
                </TableCell>
                <TableCell align="right">{company.capital}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompaniesPage;
