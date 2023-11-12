#!/bin/bash
########################################################################## 
# PROGRAMA:		env-db.sh
# Objetivo:		Configurar variaveis de ambientes
# uso:			. env-db.sh	
##########################################################################
# Atualizacao:		24/07/2012


umask 022
EDITOR=vi;                   export EDITOR
TERM=xterm;                  export TERM
TEMP=/tmp;                   export TEMP
TMPDIR=/tmp;                 export TMPDIR


##########################################################################
# CONFIGURAR AMBIENTE ORACLE  
##########################################################################

export ORACLE_SID=XE
export ORACLE_BASE=/u01/app/oracle
export ORACLE_HOME=/u01/app/oracle/product/11.2.0/xe
export ORACLE_UNQNAME=XE
export ORACLE_LIB=/u01/app/oracle/product/11.2.0/xe/lib

export NLS_LANG=AMERICAN_AMERICA.WE8ISO8859P1
#export LANG=us_EN.UTF-8

export ORACLE_OWNER=oracle
export ORACLE_TERM=xterm



#########################################################################
# CONFIGURAR PATH        
#########################################################################

export PATH=$ORACLE_HOME/bin:$ORA_CRS_HOME/bin:$PATH:/usr/local/bin
export LD_LIBRARY_PATH=$ORACLE_HOME/lib:$ORA_CRS_HOME/lib:/usr/local/lib:$LD_LIBRARY_PATH
export CLASSPATH=$ORACLE_HOME/JRE:$ORACLE_HOME/jlib:$ORACLE_HOME/rdbms/jlib


##########################################################################
# Extra
##########################################################################
alias dba='sqlplus "/ as sysdba"'
