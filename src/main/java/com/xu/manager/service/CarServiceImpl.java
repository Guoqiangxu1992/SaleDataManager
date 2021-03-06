package com.xu.manager.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.xu.manager.bean.Car;
import com.xu.manager.bean.LoginUser;
import com.xu.manager.bean.PageBean;
import com.xu.manager.dao.CarDao;

@Service("carService")
@Scope("prototype")


public class CarServiceImpl implements CarService {
@Autowired CarDao carDao;
	
	
	public List<Car> query(Car query,PageBean page) {
		if(page!=null){
			int total = carDao.countAll(query);
			page.setTotal(total);
		}
		List<Car> list = carDao.query(query);
		return list;
	}

	
	public void saveImag(String fileName, String id) {
		carDao.saveImag(fileName,id);
		
	}

	
	public void saveCar(Car car) {
		car.setStatus(1);
		carDao.saveCar(car);
		
	}

	
	public int deleteMore(String ids) {
		String id[]=ids.split(",");
		List<Integer> list = new ArrayList<Integer>(id.length);
		for(String s:id){
			list.add(Integer.parseInt(s));
		}
		carDao.deleteMore(list);
		return 0;
	}

	
	public Car getByID(int id) {
		Car car= carDao.getById(id);
		return car;
	}

	
	public void update(Car car) {
		carDao.update(car);
		
	}

	
	public List<Car> queryList(Car query, PageBean page) {
		if(page!=null){
			int total = carDao.countAll(query);
			page.setTotal(total);
		}
		List<Car> list = carDao.queryList(query);
		return list;
	}

	
	public List<Car> queryAllList(Car query, PageBean page) {
		if(page!=null){
			int total = carDao.countAll(query);
			page.setTotal(total);
		}
		List<Car> list = carDao.queryAllList(query);
		return list;
	}

}
