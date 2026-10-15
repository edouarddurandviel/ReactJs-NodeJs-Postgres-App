--
-- PostgreSQL database cluster dump
--

-- Started on 2026-10-15 14:26:01

\restrict ldcywnoLmggaxFYBW0xhl3lmFdWouOru3Xcb4HYPwuQ3aSD1e4EOad9nigGaThb

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE dbuser;
ALTER ROLE dbuser WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:lsvg5yxls3RERAYL70fpfQ==$6Fg3VPAFNKp7a9jG3f5huja4HUHyW1xL4xiIltIb6cg=:CHmZEdonAuOW8eL0YwuxBhHPWUAFyfpxiNNnnOs9esE=';

--
-- User Configurations
--








\unrestrict ldcywnoLmggaxFYBW0xhl3lmFdWouOru3Xcb4HYPwuQ3aSD1e4EOad9nigGaThb

--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

\restrict hItFmEndlhplpA8GYHmb2A4DXigeio8fnDJZM9wBUJVdo94OoWB34MZ7gZW0Wia

-- Dumped from database version 16.14 (Debian 16.14-1.pgdg13+1)
-- Dumped by pg_dump version 16.14

-- Started on 2026-10-15 14:26:02

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2026-10-15 14:26:02

--
-- PostgreSQL database dump complete
--

\unrestrict hItFmEndlhplpA8GYHmb2A4DXigeio8fnDJZM9wBUJVdo94OoWB34MZ7gZW0Wia

--
-- Database "mydatabase" dump
--

--
-- PostgreSQL database dump
--

\restrict j3vZNTwopywi8xeRaqGmj0bHQP5T8EkVqly5f0fjTebQ5vVsYOQVFnDUQNcPive

-- Dumped from database version 16.14 (Debian 16.14-1.pgdg13+1)
-- Dumped by pg_dump version 16.14

-- Started on 2026-10-15 14:26:02

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3460 (class 1262 OID 16384)
-- Name: mydatabase; Type: DATABASE; Schema: -; Owner: dbuser
--

CREATE DATABASE mydatabase WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE mydatabase OWNER TO dbuser;

\unrestrict j3vZNTwopywi8xeRaqGmj0bHQP5T8EkVqly5f0fjTebQ5vVsYOQVFnDUQNcPive
\connect mydatabase
\restrict j3vZNTwopywi8xeRaqGmj0bHQP5T8EkVqly5f0fjTebQ5vVsYOQVFnDUQNcPive

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16385)
-- Name: Companies; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Companies" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    activity character varying(255) NOT NULL,
    owner character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    imgpath character varying
);


ALTER TABLE public."Companies" OWNER TO dbuser;

--
-- TOC entry 216 (class 1259 OID 16390)
-- Name: Companies_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

CREATE SEQUENCE public."Companies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Companies_id_seq" OWNER TO dbuser;

--
-- TOC entry 3461 (class 0 OID 0)
-- Dependencies: 216
-- Name: Companies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."Companies_id_seq" OWNED BY public."Companies".id;


--
-- TOC entry 217 (class 1259 OID 16391)
-- Name: CompanyAddresses; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."CompanyAddresses" (
    id integer NOT NULL,
    "Company_Id" integer NOT NULL,
    street character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    postcode integer,
    city character varying
);


ALTER TABLE public."CompanyAddresses" OWNER TO dbuser;

--
-- TOC entry 218 (class 1259 OID 16396)
-- Name: CompanyAddresses_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

CREATE SEQUENCE public."CompanyAddresses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."CompanyAddresses_id_seq" OWNER TO dbuser;

--
-- TOC entry 3462 (class 0 OID 0)
-- Dependencies: 218
-- Name: CompanyAddresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."CompanyAddresses_id_seq" OWNED BY public."CompanyAddresses".id;


--
-- TOC entry 219 (class 1259 OID 16397)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO dbuser;

--
-- TOC entry 220 (class 1259 OID 16400)
-- Name: Tokens; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Tokens" (
    id integer NOT NULL,
    token character varying(255),
    "User_Id" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Tokens" OWNER TO dbuser;

--
-- TOC entry 221 (class 1259 OID 16403)
-- Name: Tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

CREATE SEQUENCE public."Tokens_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Tokens_id_seq" OWNER TO dbuser;

--
-- TOC entry 3463 (class 0 OID 0)
-- Dependencies: 221
-- Name: Tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."Tokens_id_seq" OWNED BY public."Tokens".id;


--
-- TOC entry 222 (class 1259 OID 16404)
-- Name: Users; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    salt character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO dbuser;

--
-- TOC entry 223 (class 1259 OID 16409)
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO dbuser;

--
-- TOC entry 3464 (class 0 OID 0)
-- Dependencies: 223
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- TOC entry 3286 (class 2604 OID 16410)
-- Name: Companies id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Companies" ALTER COLUMN id SET DEFAULT nextval('public."Companies_id_seq"'::regclass);


--
-- TOC entry 3287 (class 2604 OID 16411)
-- Name: CompanyAddresses id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."CompanyAddresses" ALTER COLUMN id SET DEFAULT nextval('public."CompanyAddresses_id_seq"'::regclass);


--
-- TOC entry 3288 (class 2604 OID 16412)
-- Name: Tokens id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Tokens" ALTER COLUMN id SET DEFAULT nextval('public."Tokens_id_seq"'::regclass);


--
-- TOC entry 3289 (class 2604 OID 16413)
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- TOC entry 3446 (class 0 OID 16385)
-- Dependencies: 215
-- Data for Name: Companies; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Companies" (id, name, activity, owner, "createdAt", "updatedAt", imgpath) FROM stdin;
17	nike	sport	nike	2026-10-15 12:19:32.348+00	2026-10-15 12:19:32.348+00	300x200/image-1792066772076-179138252-300x200.jpeg
18	adidas	sport	adidas	2026-10-15 12:19:52.108+00	2026-10-15 12:19:52.108+00	300x200/image-1792066791917-289908864-300x200.jpeg
19	asics	sport	asics	2026-10-15 12:20:21.395+00	2026-10-15 12:20:21.395+00	300x200/image-1792066821338-731716140-300x200.jpeg
20	puma	street wear	puma	2026-10-15 12:21:15.456+00	2026-10-15 12:23:20.078+00	300x200/image-1792066895177-448541825-300x200.jpeg
\.


--
-- TOC entry 3448 (class 0 OID 16391)
-- Dependencies: 217
-- Data for Name: CompanyAddresses; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."CompanyAddresses" (id, "Company_Id", street, "createdAt", "updatedAt", postcode, city) FROM stdin;
\.


--
-- TOC entry 3450 (class 0 OID 16397)
-- Dependencies: 219
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."SequelizeMeta" (name) FROM stdin;
20260511074058-create-user.js
20260511155246-create-token.js
20260511184003-create-company.js
20260511184121-create-company-address.js
\.


--
-- TOC entry 3451 (class 0 OID 16400)
-- Dependencies: 220
-- Data for Name: Tokens; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Tokens" (id, token, "User_Id", "createdAt", "updatedAt") FROM stdin;
152	1791906963493	2	2026-10-13 15:56:03.495+00	2026-10-13 15:56:03.495+00
\.


--
-- TOC entry 3453 (class 0 OID 16404)
-- Dependencies: 222
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Users" (id, email, password, salt, "createdAt", "updatedAt") FROM stdin;
1	hash3@test.com	3bd883b191816eb909f6bd11fc81ab9af205c4a72c1c78cd00d08af6607ae22e	b1a2c8dbf30250c10724f882fa269b90	2026-05-18 17:28:53.366+00	2026-05-18 17:28:53.366+00
2	hash3@mail.com	62a99c443b72e9ad56c06796eaafdf90e4fa0c5993b3d544ea1957e8b2302967	f86a5d7283d17a3a046676af3c65b3af	2026-05-18 17:29:36.058+00	2026-05-18 17:29:36.058+00
6	test@test.com	f0a9b285c2c01162ba4e6b5d719b9a8d2a3fbfe526a305e522c17510f94fce0f	fb6c043e4076876573f395190db8520c	2026-07-22 17:05:49.97+00	2026-07-22 17:05:49.97+00
\.


--
-- TOC entry 3465 (class 0 OID 0)
-- Dependencies: 216
-- Name: Companies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Companies_id_seq"', 20, true);


--
-- TOC entry 3466 (class 0 OID 0)
-- Dependencies: 218
-- Name: CompanyAddresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."CompanyAddresses_id_seq"', 40, true);


--
-- TOC entry 3467 (class 0 OID 0)
-- Dependencies: 221
-- Name: Tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Tokens_id_seq"', 152, true);


--
-- TOC entry 3468 (class 0 OID 0)
-- Dependencies: 223
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Users_id_seq"', 6, true);


--
-- TOC entry 3291 (class 2606 OID 16415)
-- Name: Companies Companies_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Companies"
    ADD CONSTRAINT "Companies_pkey" PRIMARY KEY (id);


--
-- TOC entry 3293 (class 2606 OID 16417)
-- Name: CompanyAddresses CompanyAddresses_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."CompanyAddresses"
    ADD CONSTRAINT "CompanyAddresses_pkey" PRIMARY KEY (id);


--
-- TOC entry 3295 (class 2606 OID 16419)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 3297 (class 2606 OID 16421)
-- Name: Tokens Tokens_User_Id_key; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Tokens"
    ADD CONSTRAINT "Tokens_User_Id_key" UNIQUE ("User_Id");


--
-- TOC entry 3299 (class 2606 OID 16423)
-- Name: Tokens Tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Tokens"
    ADD CONSTRAINT "Tokens_pkey" PRIMARY KEY (id);


--
-- TOC entry 3301 (class 2606 OID 16425)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 3302 (class 2606 OID 16426)
-- Name: CompanyAddresses CompanyAddresses_Company_Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."CompanyAddresses"
    ADD CONSTRAINT "CompanyAddresses_Company_Id_fkey" FOREIGN KEY ("Company_Id") REFERENCES public."Companies"(id) ON DELETE CASCADE;


-- Completed on 2026-10-15 14:26:02

--
-- PostgreSQL database dump complete
--

\unrestrict j3vZNTwopywi8xeRaqGmj0bHQP5T8EkVqly5f0fjTebQ5vVsYOQVFnDUQNcPive

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

\restrict Lpl73egSor8uZIszjaiYN8lyy3txNq6SCbOEIDqpO9tgJoYbH3FPrwKsxTABARd

-- Dumped from database version 16.14 (Debian 16.14-1.pgdg13+1)
-- Dumped by pg_dump version 16.14

-- Started on 2026-10-15 14:26:02

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2026-10-15 14:26:02

--
-- PostgreSQL database dump complete
--

\unrestrict Lpl73egSor8uZIszjaiYN8lyy3txNq6SCbOEIDqpO9tgJoYbH3FPrwKsxTABARd

-- Completed on 2026-10-15 14:26:02

--
-- PostgreSQL database cluster dump complete
--

