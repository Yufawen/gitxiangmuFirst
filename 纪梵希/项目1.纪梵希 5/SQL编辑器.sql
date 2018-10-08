--create table ytz6 select zi,nr from ytz5 group by zi,nr order by id asc
create table yiti2 select * from yitizi group by zi order by id asc
--建表--
create table vip5(
   name varchar(50) primary key,
   pass varchar(16) not null,
   sex  char(2),
   age int


)